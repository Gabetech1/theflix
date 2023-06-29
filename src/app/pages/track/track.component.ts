import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss']
})
export class TrackComponent {
  ship:any;
  form: any;

  constructor(private api: ApiService, private router: Router) {}

  track(num:any) {
    // console.log(num.value.track)

    const data = {
      track: num.value.track,
    };
    this.api.trackByNum(data).subscribe(
      (res) => {
        console.log(res);
        this.ship = res;
        // console.log(this.ship)
        if (this.ship.length == 0) {
          this.api.showAlert(
            "danger",
            "Tracking number not found in our system"
          );
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
