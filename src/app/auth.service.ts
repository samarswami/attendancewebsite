import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private http: HttpClient) {}
  getAuth() {
    console.log("inside service");
    const headerDict = {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Headers": "Content-Type"
    };

    const requestOptions = {
      headers: new HttpHeaders(headerDict)
    };
    let res = this.http.post(
      "https://wu50ioj3ok.execute-api.ap-south-1.amazonaws.com/prod/getauth",
      "{'emailid': 'samar1066@gmail.com','pwd': 'abcd'}",
      requestOptions
    );
    return res;
  }
}
