import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent }  from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppraiseeComponent } from './appraisee/appraisee.component';
import { AppraiserComponent } from './appraiser/appraiser.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { GraphComponent } from './graph/graph.component';

 export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'appraisee', component: AppraiseeComponent },
    { path: 'appraiser', component: AppraiserComponent },
    { path: 'calculator', component: CalculatorComponent },
    { path: 'graph', component: GraphComponent }
   

];

