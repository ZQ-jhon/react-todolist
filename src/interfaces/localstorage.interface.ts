
const STORAGE: { list: string } = {
    list: window.localStorage.getItem('list') || '',
};

export default STORAGE;