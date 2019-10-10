import React from 'react';
import "./App.css";
import { combineReducers, createStore, compose } from "redux"
import { Provider } from "react-redux";
import * as reducers from "./state/reducers";

// Counter test:
import Counter from './components/Counter';

const rootReducer = combineReducers({
  count: reducers.countReducer,
});

const store = createStore(
  rootReducer,
  {},
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )
);

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter />
      </div>
    </Provider>
  );
}
