import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LoginPage from '../pages/login/login';
import DashBoard from '../pages/dashboard/dashboard';
import HomePage from '../pages/home/home';
import TuyenDung from '../pages/tuyen dung/tuyen-dung';
import Auth from '../services/auth/auth';

const MainRouter = () => (
    <main>
        <BrowserRouter>
                <Switch>
                    <Route exact path = '/' render = {
                        () => (
                            <Auth orRedirectTo = '/login' orRender = {
                                <DashBoard></DashBoard>
                            }></Auth>
                        )
                    }></Route>
                    <Route path='/' exact component={HomePage}></Route>
                    <Route path='/login' exact component={LoginPage}></Route>
                    <Route path='/dashboard' exact component={DashBoard}></Route>
                    <Route path='/home' exact component={HomePage}></Route>
                    <Route path='/tuyen-dung' exact component={TuyenDung}></Route>
                </Switch>
            </BrowserRouter>
    </main>
)

export default MainRouter