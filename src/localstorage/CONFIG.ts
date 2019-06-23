
interface IStorage {
    list: string;
}
const STORAGE: IStorage = {
    list: window.localStorage.getItem('list') || '',
};

export default STORAGE;