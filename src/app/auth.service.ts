import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthData } from "./login/login.component";
import { Food, instDetails } from "./addbradmin/addbradmin.component";
@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private http: HttpClient) {}
  getAuth(uname, pwd) {
    console.log("inside service");
    const headerDict = {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Headers": "Content-Type"
    };

    const requestOptions = {
      headers: new HttpHeaders(headerDict)
    };
    return this.http.post<AuthData>(
      "https://wu50ioj3ok.execute-api.ap-south-1.amazonaws.com/prod/getauth",
      "{'emailid': '"+uname+"','pwd': '"+pwd+"'}",
      requestOptions
    );
  }
  addBrch(inst,brname,bradmnname,bradmnemail,bradmncontach) {
    console.log("inside service");
    const headerDict = {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Headers": "Content-Type"
    };

    const requestOptions = {
      headers: new HttpHeaders(headerDict)
    };
    let params={
      'inst':inst,
      'brname':brname,
      'bradmnname':bradmnname,
      'bradmnemail':bradmnemail,
      'bradmncontach':bradmncontach

    }
    return this.http.post<AuthData>(
      "https://wu50ioj3ok.execute-api.ap-south-1.amazonaws.com/prod/addbranch",
      params,
      requestOptions
    );
  }
  getInstDetails() {
    console.log("inside service");
    const headerDict = {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Headers": "Content-Type"
    };

    const requestOptions = {
      headers: new HttpHeaders(headerDict)
    };
    return this.http.get<instDetails[]>(
      "https://wu50ioj3ok.execute-api.ap-south-1.amazonaws.com/prod/getinstdetails",
      requestOptions
    );
  }
  addInst(instName, instAddr, spocName, spocContact, InstContact) {
    console.log("inside addInst");
    const headerDict = {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Headers": "Content-Type"
    };

    const requestOptions = {
      headers: new HttpHeaders(headerDict)
    };
    let params={
      'instName':instName,
      'instAddr':instAddr,
      'spocName':spocName,
      'spocContact':spocContact,
      'InstContact':InstContact

    }
    return this.http.put(
      "https://wu50ioj3ok.execute-api.ap-south-1.amazonaws.com/prod/addinst",
      params,
      requestOptions
    );
  }
}
