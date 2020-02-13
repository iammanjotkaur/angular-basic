import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipe-try';
  courses= [ 1,2];
  viewMode="something";
  subjects=[
    { id:1, name:'subject1'},
    { id:2, name:'subject2'},
    { id:3, name:'subject3'},
  ];

  onAdd(){
    this.subjects.push({id:4, name:'subject4'})
  }
  onRemove(sub){
    let index=this.subjects.indexOf(sub);
    this.subjects.splice(index,1);
  }
}
