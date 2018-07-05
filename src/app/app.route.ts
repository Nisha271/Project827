
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppraiseeComponent } from './registeration/appraisee.component';
import { AppraiserComponent } from './appraiser/appraiser.component';
import { GraphComponent} from './graph/graph.component';


export const routes: Routes = [
    { path: '' , component: LoginComponent },
    { path: 'login' , component: LoginComponent },
    { path: 'dashboard' , component: DashboardComponent },
    { path: 'appraisee' , component: AppraiseeComponent },
    { path: 'appraiser' , component: AppraiserComponent },
    { path: 'projects' , component: GraphComponent }

];

