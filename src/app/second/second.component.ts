import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CanComponentDeactivate } from '../my-can-deactivate.guard';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit, CanComponentDeactivate {

  constructor(
    private router: Router
  ) { }

  canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {

    return confirm('are you sure?');
  }

  ngOnInit(): void {
  }

  goBack1(): void {
    history.back();
  }

  goBack2(): void {
    this.router.navigateByUrl('/first-component');
  }
}
