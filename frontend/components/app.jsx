import React from 'react';
import WelcomeContainer from './session/welcome_container';
import { Route, Switch } from 'react-router-dom'
import LoginFormContainer from './session/login_form_container';
import SignUpFormContainer from './session/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';

export default () => (
  <div>
    <h1>T_r_A_i_L_m_A_g_I_c</h1>
    <WelcomeContainer />
    <Switch>
      <AuthRoute exact path='/login' component={LoginFormContainer} />
      <AuthRoute exact path='/signup' component={SignUpFormContainer} />
    </Switch>
  </div>
);