
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppraiseeComponent } from './registeration/appraisee.component';
import { AppraiserComponent } from './appraiser/appraiser.component';
import { GraphComponent } from './graph/graph.component';
import { HomeComponent } from './home/home.component';
import { ReportComponent } from './report/report.component';


export const routes: Routes = [
    { path: '' , component: LoginComponent },
    { path: 'login' , component: LoginComponent },
    { path: 'dashboard' , component: DashboardComponent },
    { path: 'home' , component: HomeComponent },
    { path: 'appraisee' , component: AppraiseeComponent },
    { path: 'projects' , component: GraphComponent },
    { path: 'appraiser' , component: AppraiserComponent },
    { path: 'report' , component: ReportComponent },

    { path: 'projects' , component: GraphComponent }
];

