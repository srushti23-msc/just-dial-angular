import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  mydata:any
  constructor(private cunst:HttpClient) { }

  ngOnInit(): void 
  {
    this.cunst.get("https://reqres.in/api/users?page=2").subscribe((data) => { this.mydata = data })
  }

}
