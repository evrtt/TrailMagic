import React from 'react';
import WelcomeContainer from './session/welcome_container';
import { Route } from 'react-router-dom'
import LoginFormContainer from './session/login_form_container';
import SignUpFormContainer from './session/signup_form_container';

export default () => (
  <div>
    <h1>T_r_A_i_L_m_A_g_I_c</h1>
    <WelcomeContainer />
    <Route exact path='/login' component={LoginFormContainer} />
    <Route exact path='/signup' component={SignUpFormContainer} />
  </div>
);