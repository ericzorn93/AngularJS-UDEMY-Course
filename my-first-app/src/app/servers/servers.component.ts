import { Component, OnInit, ViewEncapsulation } from '@angular/core';
// import {setTimeout} from "timers";

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No Server was created!";
  serverName = 'Testserver';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {

  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = "Sever was created! Name is " + this.serverName;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
