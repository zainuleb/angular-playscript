import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No Server Was Created';

  constructor() {}

  ngOnInit(): void {}

  // Function to change state of serverCreation Status
  onCreateServer() {
    this.serverCreationStatus = 'Server was Created';
  }
}
