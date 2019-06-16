function boundMethod(target, key, descriptor) {
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
		set(value) {
			fn = value;
		}
	};
}

/**
 * Use boundMethod to bind all methods on the target.prototype
 */
function boundClass(target) {
	// (Using reflect to get all keys including symbols)
	let keys;
	// Use Reflect if exists
	if (typeof Reflect !== 'undefined' && typeof Reflect.ownKeys === 'function') {
		keys = Reflect.ownKeys(target.prototype);
	} else {
		keys = Object.getOwnPropertyNames(target.prototype);
		// Use symbols if support is provided
		if (typeof Object.getOwnPropertySymbols === 'function') {
			keys = keys.concat(Object.getOwnPropertySymbols(target.prototype));
		}
	}

	keys.forEach(key => {
		// Ignore special case target method
		if (key === 'constructor') {
			return;
		}

		const descriptor = Object.getOwnPropertyDescriptor(target.prototype, key);

		// Only methods need binding
		if (typeof descriptor.value === 'function') {
			Object.defineProperty(target.prototype, key, boundMethod(target, key, descriptor));
		}
	});
	return target;
}

export default function autobind(...args) {
	if (args.length === 1) {
		return boundClass(...args);
	}
	return boundMethod(...args);
}