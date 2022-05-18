import { Component, OnInit } from '@angular/core';

import { ElementConfigService } from '../element-config.service';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {

  constructor(private user: ElementConfigService) {
    let user2 = this.user.getList();

    console.log(user2);

  }

  ngOnInit(): void {
  }

}
