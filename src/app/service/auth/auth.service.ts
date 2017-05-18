import { Injectable } from '@angular/core';

import { tokenNotExpired } from '../../../../node_modules/angular2-jwt/angular2-jwt';

@Injectable()
export class AuthService{	

	login(username: string, password: string): boolean {		
		if(username === "username@example.com" && password === "password1"){			
			localStorage.setItem("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ");
			return true;
		}
		return false;
	}

	logout(){
		localStorage.removeItem("token");
	}

	loggedIn(): boolean{
		return tokenNotExpired();		
	}
}