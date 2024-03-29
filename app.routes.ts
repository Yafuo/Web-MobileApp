import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import {LoginComponent} from '~/app/login/login.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full',
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'home',
        component: HomeComponent,
    },
];
