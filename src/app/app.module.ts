import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { ResumeComponent } from './component/resume/resume.component';

import { ResumeService } from './service/resume/resume.service';
import { AuthService } from './service/auth/auth.service';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),    
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    ResumeComponent
  ],
  providers: [
  	ResumeService,
  	AuthService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }