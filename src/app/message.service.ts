import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
  messagees: string[] = [];

  add(message: string) {
    this.messagees.push(message);
  }

  clear() {
    this.messagees = [];
  }
  constructor() { }

}
