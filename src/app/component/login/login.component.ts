import { Component } from '@angular/core';

import { AuthService } from '../../service/auth/auth.service';

@Component({
	selector: 'login',
	templateUrl: './login.component.html',
})
export class LoginComponent {

	email: string;
	password: string;	
	data: string;
	constructor(private auth: AuthService){} 	

	onSubmit(email: string, password: string){
		this.auth.login(email, password);
	}

	loggedIn(): boolean {	
		if(this.auth.loggedIn()){
			console.log("logged in");
			return true;
		}
		console.log("not logged in");
		return false;
	}

	logout(){
		this.auth.logout();
	}
}