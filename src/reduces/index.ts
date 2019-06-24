// import todoItemHandler from '../actions/todo-item-handler';
import STORAGE from '../localstorage/CONFIG';

/** 提取返回值类型 */
// export type Action = ReturnType<typeof todoItemHandler>;
// export type Payload = ReturnType<typeof todoItemHandler>["payload"];
export interface Payload {
  text: string;
  uuid: string;
  date?: number;
}
export interface Action {
  type: "ADD_ITEM" | "DELETE_ITEM";
  payload: Payload;
}

function expand(origin: any) {
  return typeof origin === 'string'
    ? Array.isArray(JSON.parse(STORAGE.list)) ? JSON.parse(STORAGE.list) : []
    : [];
}

export default (state: Array<Payload> = !!STORAGE.list ? expand(STORAGE.list) : [], action: Action) => {
  switch (action.type) {
    case "ADD_ITEM":
      action.payload.date = new Date().getTime();
      return [...state, action.payload];
    case "DELETE_ITEM":
      const copy = [...state];
      const index = copy.findIndex(item => item.uuid === action.payload.uuid);
      copy.splice(index, 1);
      return copy;
    default:
      return state;
  }
}