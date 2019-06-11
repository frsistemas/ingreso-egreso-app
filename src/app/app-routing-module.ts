import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/Router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashBoardComponent } from './dashboard/dashboard.component';
import { dashboardRoutes } from './dashboard/dashboard.routes';

const routes: Routes = [
    { path: 'login'    , component: LoginComponent      },
    { path: 'register' , component: RegisterComponent   },
    { 
        path: ''         , 
        component: DashBoardComponent ,
        children: dashboardRoutes
     },
    { path: '**'       , redirectTo: '' }
] ;

@NgModule({
    imports: [
        RouterModule.forRoot( routes )
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule{}
