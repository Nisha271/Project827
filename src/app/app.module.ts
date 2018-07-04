import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes  } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {routes} from './app.route';
import { AppraiseeComponent } from './appraisee/appraisee.component';
import { AppraiserComponent } from './appraiser/appraiser.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { GraphComponent } from './graph/graph.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    AppraiseeComponent,
    AppraiserComponent,
    CalculatorComponent,
    GraphComponent
    
  ],
  
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
],

   //providers: [ BookService ],
   bootstrap: [ AppComponent ]
})

export class AppModule { }
