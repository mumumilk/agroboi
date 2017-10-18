import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase';

@Injectable()
export class FirebaseProvider {

	constructor() {
		let config = {
			apiKey: "AIzaSyCDEPROLFVn5fxxiHyrPdbr4gAxvmr4_OU",
    	authDomain: "boinamao-17585.firebaseapp.com",
    	databaseURL: "https://boinamao-17585.firebaseio.com",
    	projectId: "boinamao-17585",
    	storageBucket: "boinamao-17585.appspot.com",
    	messagingSenderId: "563111567680"
		};
		firebase.initializeApp(config);
	}

    database() {
        return firebase.database();
    }

    auth() {
        return firebase.auth();
    }

}
