import React from "react";
import { connect } from "react-redux"
import * as actionCreators from "../state/actionCreators";

export function QuoteBox(props) {
    const { quote } = props;

    return (
        <>
            <div className="quote-box-and-triangle">
                <div className="quote-box">
                    <p>{quote}</p>
                </div>
                <div className="triangle" />
            </div>
        </>
    )
}

export default connect(
    state => state,
    actionCreators,
)(QuoteBox)
