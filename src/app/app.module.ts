import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { routes } from './app.route';
import { AppraiseeComponent } from './registeration/appraisee.component';
import { AppraiserComponent } from './appraiser/appraiser.component';
import { HomeComponent } from './home/home.component';
import { GraphComponent} from './graph/graph.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    AppraiseeComponent,
    AppraiserComponent,
    HomeComponent,
    GraphComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
