import * as types from "./actionTypes";

// Counter test:
export function incrementCount() {
    return { type: types.INCREMENT_COUNT };
}
export function decrementCount() {
    return { type: types.DECREMENT_COUNT };
}