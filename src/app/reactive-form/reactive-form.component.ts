import { Component, OnInit } from '@angular/core';
import { User} from '../user';
import {FormGroup, FormControl,Validator, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  userList: User[]=[];

  form: FormGroup;
  addUser(form)
  {
    console.log(form.value);
    console.log(this.form.value);
  }
  constructor() { }

  ngOnInit(): void {

    this.form= new FormGroup({
      name : new FormControl('',Validators.required),
      contact: new FormControl('',[Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(10),Validators.maxLength(10)]),
      email: new FormControl('',[Validators.required,Validators.email]),
    })
  }

  }


