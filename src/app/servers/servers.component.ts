import { Component, OnInit } from '@angular/core';

@Component({
  // selector: "[app-servers]",
  // selector: '.app-servers',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = '';
  serverCreated = false;
  servers = ['Test Server', 'Test server 2'];

  constructor() {
    setTimeout( () => this.allowNewServer = true, 2000);
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = `Server ${this.serverName} was created successfuly`;
  }

  onUpdateServerName(event: any) {
    // console.log(event.target.value)
    this.serverName = (event.target).value;
  }

  ngOnInit() {
  }

}
