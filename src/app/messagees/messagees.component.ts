import { Component, OnInit } from '@angular/core';

import { MessageService } from '../message.service';

@Component({
  selector: 'app-messagees',
  templateUrl: './messagees.component.html',
  styleUrls: ['./messagees.component.css']
})
export class MessageesComponent implements OnInit {

  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
