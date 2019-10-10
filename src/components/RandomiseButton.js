import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";

export function RandomiseButton(props) {
    const { randomiseQuote } = props;

    return (
        <div className="randomise-button">
            <button onClick={randomiseQuote}>Random ⟳</button>
        </div>
    )
}

export default connect(
    state => state,
    actionCreators,
)(RandomiseButton);