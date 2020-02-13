import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [DataService]
})
export class ListComponent implements OnInit {
  ItemsReceived: string[]=[' '];

  getItemsFromServiceClass()
  {
    this.ItemsReceived=this.dataService.getItems();
  }

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  }

}
