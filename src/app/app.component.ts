import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import '../assets/css/styles.css';

import { ResumeService } from './service/resume/resume.service';
import { Resume } from './model/resume/resume';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{ 

	resume : Resume;
	content : SafeHtml;
	title : String = "<h2>placeholder title</h2>";

	constructor(private resumeService: ResumeService,
				private sanitizer: DomSanitizer,
				){}

	ngOnInit(): void {
		this.resumeService.getResume(1).then(
			resume => {
				this.resume = resume;				
				this.content = this.sanitizer.bypassSecurityTrustHtml(String(resume.content));
			}
		);

	}

}
