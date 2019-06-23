const ACTIONS = {
    ADD_ITEM: 'ADD_TODO',
    DELETE_ITEM: 'DELETE_TODO',

};
type ActionType = keyof typeof ACTIONS;

const todoItemHandler = (text: string, type: ActionType) => {
    return {
        type,
        payload: {
            text,
            date: new Date().getTime(),
        }
    }
};
export default todoItemHandler;