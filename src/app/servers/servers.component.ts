import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No Server Was Created';
  serverName = '';
  serverCreated = false;
  constructor() {}

  ngOnInit(): void {}

  // Function to change state of serverCreation Status
  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus =
      'Server was Created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    /* Explicit casting used here */
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
