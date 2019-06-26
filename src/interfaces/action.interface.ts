import { Payload } from "./payload.interface";

export interface Action {
    type: "ADD_ITEM" | "DELETE_ITEM";
    payload: Payload;
  }