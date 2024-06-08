import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import {HttpClientModule} from '@angular/common/http';
import { ChartComponent } from './chart/chart.component';
import { CalenderComponent } from './calender/calender.component';
import { ProfileComponent } from './profile/profile.component'

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';

import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    ChartComponent,
    CalenderComponent,
    ProfileComponent,
  
  
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule ,
    HttpClientModule,
    MatDatepickerModule,
    MatCardModule,
    MatNativeDateModule,
    HighchartsChartModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
