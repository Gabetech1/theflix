import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location, PopStateEvent } from '@angular/common';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent {
  private lastPoppedUrl: string='';
  private yScrollStack: number[] = [];

  constructor( public location: Location, private router: Router) {}

  
}
