import { Component, OnInit } from '@angular/core';

@Component({
  // selector: "[app-servers]",
  // selector: '.app-servers',
  selector: "app-servers",
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus: string = "No server was created";
  serverName = "";
  serverCreated = false;

  constructor() {
    setTimeout( () => this.allowNewServer = true, 2000)
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = `Server ${this.serverName} was created successfuly`;
  }

  onUpdateServerName(event: any) {
    // console.log(event.target.value)
    this.serverName = (<HTMLInputElement>event.target).value
  }

  ngOnInit() {
  }

}
