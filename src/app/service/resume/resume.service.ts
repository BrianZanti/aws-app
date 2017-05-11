import { NgModule, Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Resume } from '../../model/resume/resume';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ResumeService{
	
	private resumesUrl = 'api/resumes';

	constructor(private http: Http){}

	getResume(id: number): Promise<Resume> {
		return this.http.get(this.resumesUrl)		
			.toPromise()
			.then(response => {
				let resumes = response.json().data as Resume[];
				for(let resume of resumes){
					if(resume.id === id){
						return resume;
					}
				}
				throw Error("Id not Found");
			})
			.catch(this.handleError)
	}
    
	getAllResumes(): Promise<Resume[]> {
		return this.http.get(this.resumesUrl)		
			.toPromise()			
			.then(response => {
				return response.json().data as Resume[];
				
			})		
			.catch(this.handleError)				
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error);
		return Promise.reject(error.message || error);
	}
}