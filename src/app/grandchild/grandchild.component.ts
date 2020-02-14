import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-grandchild',
  templateUrl: './grandchild.component.html',
  styleUrls: ['./grandchild.component.css']
})
export class GrandchildComponent implements OnInit {
  cname:string; 
  @Output () childname = new EventEmitter();
  onchildname(name:string)
  {
    this.childname.emit(name);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
