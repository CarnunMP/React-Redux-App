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

// App proper:
const initialQuote = "I give up drinking every week.";
export function quoteReducer(quote = initialQuote, action) {
    switch (action.type) {
        default:
            return quote;
    }
}