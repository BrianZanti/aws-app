import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { ResumeService } from './service/resume/resume.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),    
  ],
  declarations: [
    AppComponent
  ],
  providers: [
  	ResumeService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }