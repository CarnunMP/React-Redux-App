import * as types from "./actionTypes";
import axios from "axios";

// Counter test:
export function incrementCount() {
    return { type: types.INCREMENT_COUNT };
}
export function decrementCount() {
    return { type: types.DECREMENT_COUNT };
}

// App proper:
export const randomiseQuote = () => dispatch => {
    axios.get("https://api.kanye.rest")
        .then(res => {
            let quote = res.data.quote;
            const lastCharacter = quote[quote.length - 1];
            if (lastCharacter !== "." && lastCharacter !== "!" && lastCharacter !== "?") {
                quote = `“` + quote + `.”`;
            } else {
                quote = `“` + quote + `”`;
            }

            dispatch({
                type: types.RANDOMISE_QUOTE,
                payload: quote,
            })
        })
        .catch(err => {
            alert(err);
        })
}