
interface IStorage {
    list: string;
}
const LOCAL_STORAGE_FIELD: IStorage = {
    list: window.localStorage.getItem('list') || '',
};

export default LOCAL_STORAGE_FIELD;