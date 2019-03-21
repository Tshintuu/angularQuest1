import { Component, OnInit } from '@angular/core';

import { Sign } from '../sign';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUp: Sign = {
    email: "Enter your e-mail"
  };
  
  constructor() { }

  ngOnInit() {
  }

}
