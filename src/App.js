import React from 'react';
import "./App.css";
import { combineReducers, createStore, compose, applyMiddleware } from "redux"
import { Provider } from "react-redux";
import * as reducers from "./state/reducers";
import thunk from "redux-thunk";
import Kanye from "./images/kanye.png";

// Counter test:
import Counter from './components/Counter';
import QuoteBox from './components/QuoteBox';
import RandomiseButton from './components/RandomiseButton';

const rootReducer = combineReducers({
  count: reducers.countReducer,
  quote: reducers.quoteReducer,
});

const store = createStore(
  rootReducer,
  {},
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )
);

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <Counter /> */}
        <QuoteBox />
        <RandomiseButton />
        <div className="kanye-image">
          <img src={Kanye} alt="kanye thinking" />
        </div>
      </div>
    </Provider>
  );
}
