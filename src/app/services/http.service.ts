import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
// import { from } from 'rxjs';
// import { headersToString } from "selenium-webdriver/http";
import { environment } from "src/environments/environment";
@Injectable({
  providedIn: "root",
})
export class HttpService {
  constructor(private http: HttpClient) {}

  post(serviceName: string, data: any) {
    // const header = new HttpHeaders ();
    // const options = { header: headersToString, withCredentials: false}
    const headers = new HttpHeaders();
    const options = { headers: headers, withCredintials: false };
    const url = environment.apiUrl + serviceName;

    return this.http.post(url, JSON.stringify(data), options);
  }
}
