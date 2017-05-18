import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';

import { ResumeService } from './service/resume/resume.service';
import { AuthService } from './service/auth/auth.service';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),    
  ],
  declarations: [
    AppComponent,
    LoginComponent
  ],
  providers: [
  	ResumeService,
  	AuthService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }