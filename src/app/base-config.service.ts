import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseConfigService {

  constructor() { }

  getContact()
  {
    return 'Contact T-systems';
  }
}
