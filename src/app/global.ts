// globals.ts
import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
  role: string = '';
  isLoggedIn: boolean= true;
  loggedInName:string='';
}