import STORAGE from '../interfaces/localstorage.interface';
import { Payload } from '../interfaces/payload.interface';
import { Action } from '../interfaces/action.interface';

function expand(origin: any) {
  let state = [];
  try {
    state = Array.isArray(JSON.parse(origin)) ? JSON.parse(STORAGE.list) : [];
  } catch (err) {
    console.warn(`JSON parse 错误，localstorage 有误!`);
    state = [];
  }
  return state;
}
const initialState: Array<Payload> = !!STORAGE.list ? expand(STORAGE.list) : [];


export default (state = initialState, action: Action) => {
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