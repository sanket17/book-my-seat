import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HeaderComponent from './Header';
import { BodyContainer } from '../../theme/css/Global';
import Login from '../auth/Login';
import SigninComponent from '../auth/SigninComponent';
import FooterComponent from './Footer';
import MovieSelectionComponent from '../booking/MovieSelectionComponent';

function MainContainer() {
  return (
    <>
      <HeaderComponent />
      <BodyContainer className="mb-5">
        <Switch>
          <Route path="/show" component={MovieSelectionComponent} />
          <Route path="/create" component={SigninComponent} />
          <Route path="/" component={Login} />
        </Switch>
      </BodyContainer>
      <FooterComponent />
    </>
  );
}

export default MainContainer;
