import { Component, OnInit, EventEmitter } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.css']
})
export class WarningAlertComponent implements OnInit {

  @Input() inputtext: string;

  constructor() {}

  ngOnInit() {
  }

}
