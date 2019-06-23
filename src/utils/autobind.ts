function boundMethod(target: any, key: string | number | symbol, descriptor: PropertyDescriptor) {
	let fn = descriptor.value;

	if (typeof fn !== 'function') {
		throw new TypeError(`@boundMethod decorator can only be applied to methods not: ${typeof fn}`);
	}

	let definingProperty = false;

	return {
		configurable: true,
		get() {
			// eslint-disable-next-line no-prototype-builtins
			if (definingProperty || this === target.prototype || this.hasOwnProperty(key) ||
				typeof fn !== 'function') {
				return fn;
			}

			const boundFn = fn.bind(this);
			definingProperty = true;
			Object.defineProperty(this, key, {
				configurable: true,
				get() {
					return boundFn;
				},
				set(value) {
					fn = value;
					delete this[key];
				}
			});
			definingProperty = false;
			return boundFn;
		},
		set(value: any) {
			fn = value;
		}
	};
}

/**
 * Use boundMethod to bind all methods on the target.prototype
 */
function boundClass(target: any) {
	// (Using reflect to get all keys including symbols)
	let keys;
	// Use Reflect if exists
	if (typeof Reflect !== 'undefined' && typeof Reflect.ownKeys === 'function') {
		keys = Reflect.ownKeys(target.prototype);
	} else {
		keys = Object.getOwnPropertyNames(target.prototype);
		// Use symbols if support is provided
		if (typeof Object.getOwnPropertySymbols === 'function') {
			keys = keys.concat(Object.getOwnPropertySymbols(target.prototype).toString());
		}
	}

	keys.forEach((key: string | number | symbol) => {
		// Ignore special case target method
		if (key === 'constructor') {
			return;
		}

		const descriptor = Object.getOwnPropertyDescriptor(target.prototype, key) as PropertyDescriptor;

		// Only methods need binding
		if (typeof descriptor.value === 'function') {
			Object.defineProperty(target.prototype, key, boundMethod(target, key, descriptor));
		}
	});
	return target;
}

export default function autobind(...args: Array<any>) {
	if (args.length === 1) {
		return boundClass(args[0]);
	}
	return boundMethod(args[0], args[1], args[2]);
}