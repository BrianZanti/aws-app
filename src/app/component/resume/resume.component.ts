import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { ResumeService } from '../../service/resume/resume.service';
import { Resume } from '../../model/resume/resume';

@Component({
	selector: "resume",
	templateUrl: "resume.component.html",
	styleUrls: ["resume.component.css"]
})
export class ResumeComponent implements OnInit{
	
	content: SafeHtml;
	resume: Resume;	

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