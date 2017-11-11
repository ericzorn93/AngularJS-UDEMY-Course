import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
  styles: [`
    .online {
      color: white;
    }
  `],
  encapsulation: ViewEncapsulation.None
})
export class ServerComponent implements OnInit {

  serverID: number = 10;
  serverSatus: string = 'offline';


  constructor() {
    this.serverSatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return this.serverSatus;
  }

  getColor() {
    return this.serverSatus === 'online' ? 'green' : 'red';
  }

  ngOnInit() {

  }

}
