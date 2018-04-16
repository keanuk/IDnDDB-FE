import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { DndService } from '../dnd.service';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms'


@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.css']
})

@Injectable()
export class GenderComponent implements OnInit {

  // form: FormGroup;
  constructor(private router: Router, private user: UserService, private dnd: DndService) {
    // this.form = fb.group({
    //   // gender: ['', Validators.required]
    // });
  }

  ngOnInit() {
  }

  setGender(e) {
    let character = this.user.getNewChar();
    // console.log(e.target.elements);
  }

}
