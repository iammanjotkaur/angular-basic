import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input ('parentname') parentname :string;
  childname : string="";
  getName(childname){
    this.childname=childname;
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
