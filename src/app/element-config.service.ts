import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ElementConfigService {

  constructor() { }

  getList()
  {
    let list={
      name:'srushti',
      add:'pune',
      cont:'986542'
    }
    return list;
  }
}
