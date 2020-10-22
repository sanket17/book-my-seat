import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  ToastsContainer,
  ToastsStore,
  ToastsContainerPosition,
} from 'react-toasts';
import './App.css';
import MainContainer from './components/container/MainContainer';

function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={MainContainer} />
      </Switch>
      <ToastsContainer
        position={ToastsContainerPosition.TOP_RIGHT}
        store={ToastsStore}
        lightBackground
      />
    </>
  );
}

export default App;
