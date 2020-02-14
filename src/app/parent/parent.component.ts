import { Component, OnInit,Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  parentname ="PARENT";
 
  constructor() { }

  ngOnInit(): void {
  }

}
