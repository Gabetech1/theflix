import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = "https://apis.developmentsite.top/flix";
  smtp_url = "https://apis.developmentsite.top/flix/smtp";

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
    return this.http.post(this.url + "/getrackByid.php", data, {
      headers: this.httpHeaders(),
    });
  }

  trackByNum(data:any) {
    return this.http.post(this.url + "/getrackByNum.php", data, {
      headers: this.httpHeaders(),
    });
  }

  track(data:any) {
    return this.http.post(this.url + "/postTrackingData.php", data, {
      headers: this.httpHeaders(),
    });
  }

  getrack() {
    return this.http.get(this.url + "/getTrackingData.php");
  }

  getrackById(id:any) {
    return this.http.post(this.url + "/getrackByid.php", id, {
      headers: this.httpHeaders(),
    });
  }

  updateTrackById(data:any) {

    return this.http.post(this.url + "/updateTrackById.php", data, {
      headers: this.httpHeaders(),
    });
  }

  deleteTrackById(id:any) {
    return this.http.post(this.url + "/deleteTrackById.php", id, {
      headers: this.httpHeaders(),
    });
  }

  sendMessage(data:any) {
    return this.http.post(this.smtp_url + "/sendmail.php", data, {
      headers: this.httpHeaders(),
    });
  }

  isAuthenticated() {
    return this.http.get("/auth/isAuthenticated");
  }

  showAlert(type:any, msg:any) {
  }
}
