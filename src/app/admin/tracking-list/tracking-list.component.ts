import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

declare interface TableData {
  headerRow: string[];
}


@Component({
  selector: 'app-tracking-list',
  templateUrl: './tracking-list.component.html',
  styleUrls: ['./tracking-list.component.scss']
})
export class TrackingListComponent {
  public tableData1: TableData = {
    headerRow: [
      "Tracking Number",
      "Package",
      "Sender",
      "Recipient",
      "Status",
      "Date",
      "Action",
    ]
  };
  ship:any;

  constructor(private api: ApiService, private router: Router) {}

  ngOnInit() {
    this.api.getrack().subscribe(
      (res) => {
        //console.log(res)
        this.ship = res;
        //console.log(this.ship)
      },
      (err) => {
        //console.log(err)
      }
    );

  }

  delete(id:any) {
    //console.log(id)
    const id_no = {
      id: id,
    };
    if (confirm("Are you sure you want to delete this tracking details?")) {
      this.api.deleteTrackById(id_no).subscribe(
        (res) => {
          // console.log(res);
          window.location.reload();
          // this.router.navigate(['/nul-admin/tracking_list'])
        },
        (err) => {
          // console.log(err);
          window.location.reload();
          //console.log(err)
        }
      );
    }
  }
}
