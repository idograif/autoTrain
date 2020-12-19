import { Component, Input, OnInit } from '@angular/core';
import { Route } from '../route';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.scss']
})
export class RouteComponent implements OnInit {

  @Input() trainRoute: Route;

  constructor() { }

  ngOnInit(): void {
  }

}
