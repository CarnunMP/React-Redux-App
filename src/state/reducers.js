import * as types from "./actionTypes";

// Counter test:
const initialCount = 0;
export function countReducer(count = initialCount, action) {
    switch (action.type) {
        case types.INCREMENT_COUNT:
            return count + 1;
        case types.DECREMENT_COUNT:
            return count - 1;
        default:
            return count;
    }
}