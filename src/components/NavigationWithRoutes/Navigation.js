import React from 'react';
import { NavLink } from 'react-router-dom';
import * as Routes from './Routes';
import SignOutBtn from '../UserAuth/Signout';
import 'C:/Users/Asheer/Desktop/Recent-work/quiz-app/src/bootstrap.css'
import 'C:/Users/Asheer/Desktop/Recent-work/quiz-app/src/App.css'
import 'C:/Users/Asheer/Desktop/Recent-work/quiz-app/src/App.css'

const Navigation = ({ uid }) =>
    <div>
        {uid ? <NavigationAuth /> : <NavigationNonAuth />}
    </div>

const NavigationAuth = () =>
    <ul className='navBarStyle'>
        <li className='myListStyle'><NavLink exact className='style' activeClassName='active' to={Routes.HOME}>HOME</NavLink></li>
        <li className='myListStyle'><NavLink exact className='style' activeClassName='active' to={Routes.DASHBOARD}>Dashboard</NavLink></li>        
        <li className='signOutStyle'><SignOutBtn /></li>
    </ul>

const NavigationNonAuth = () =>
    <ul className='navBarStyle'>
        <li className='myListStyle'><NavLink exact className='style' activeClassName='active' to={Routes.HOME}><strong>HOME</strong></NavLink></li>
        <li className='myListStyle'><NavLink className='style' activeClassName='active' to={Routes.SIGN_IN}><strong>SIGN IN</strong></NavLink></li>
        <li className='myListStyle'><NavLink className='style' activeClassName='active' to={Routes.SIGN_UP}><strong>SIGN UP</strong></NavLink></li>
    </ul>

export default Navigation;