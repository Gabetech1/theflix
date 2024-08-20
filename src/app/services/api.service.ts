import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 // url = 'http://127.0.0.1:8000/api';
  url = 'https://api.flixshipping.com/api';

  constructor(private http: HttpClient) { }

  httpHeaders() {
    let headers = new HttpHeaders();
    headers.append("Accept", "application/json");
    headers.append("Content-Type", "application/json");
    return headers;
  }

  register(data:any) {
    return this.http.post(this.url + "/siginUpUser.php", data, {
      headers: this.httpHeaders(),
    });
  }
  login(data:any) {

    return this.http.post(this.url + "/loginUser.php", data, {
      headers: this.httpHeaders(),
    });
  }

  editrack(data:any) {
    return this.http.post(this.url + "/getTrackById", data, {
      headers: this.httpHeaders(),
    });
  }

  trackByNum(data:any) {
    return this.http.post(this.url + "/getTrackByNum", data, {
      headers: this.httpHeaders(),
    });
  }

  track(data:any) {
    return this.http.post(this.url + "/postTrackingData", data);
  }
  /* track(data:any) {
    return this.http.post(this.url + "/postTrackingData.php", data, {
      headers: this.httpHeaders(),
    });
  } */

  getrack() {
    return this.http.get(this.url + "/getTrackingData");
  }

  getrackById(id:any) {
    return this.http.post(this.url + "/getTrackById", id, {
      headers: this.httpHeaders(),
    });
  }

  updateTrackById(data:any) {

    return this.http.post(this.url + "/updateTrackById", data, {
      headers: this.httpHeaders(),
    });
  }

  deleteTrackById(id:any) {
    return this.http.post(this.url + "/deleteTrackById", id, {
      headers: this.httpHeaders(),
    });
  }

  sendMessage(data:any) {
    return this.http.post(this.url + "/sendMail", data, {
      headers: this.httpHeaders(),
    });
  }

  isAuthenticated() {
    return this.http.get("/auth/isAuthenticated");
  }

  showAlert(type:any, msg:any) {
  }
}
