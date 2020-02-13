import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})


export class ContactFormComponent implements OnInit {
  langs=['french','german','korean'];
  firstName="";
  pass="";
  email="";
  lastName="";
  constructor() { }
  printngform(f)
  {
    console.log(f.value);
  }
  ngOnInit(): void {
   
  }

}
