import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import * as auth0 from 'auth0-js';

(window as any).global = window;

@Injectable()
export class Auth0Service {

  auth0 = new auth0.WebAuth({
    clientID: 'BdElmZbQPf0uo7e1sqjnrdWxWGO4yPvS',
    domain: 'eshop.au.auth0.com',
    responseType: 'token id_token',
    audience: 'https://eshop.au.auth0.com/userinfo',
    redirectUri: 'http://localhost:3000/callback',
    scope: 'openid'
  });

  constructor(public router: Router) {}

  public login(): void {
    this.auth0.authorize();
  }

}
