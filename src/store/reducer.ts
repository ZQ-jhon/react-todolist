import STORAGE from '../localstorage/CONFIG';
import { Payload } from '../interfaces/payload.interface';
import { Action } from '../interfaces/action.interface';

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