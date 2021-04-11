import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { SharedService } from '../shared/shared.service';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { AdminComponent } from '../admin/admin.component';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css', '../app.component.css'],
})
export class ContactComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  matcher = new MyErrorStateMatcher();
  constructor(private shared: SharedService) {}
  message= [] as any;

  ngOnInit(): void {
    this.shared.setMessage(this.message);
  }

  sendMessage() {
    let name, email,msg;
    name = $('#name').val();
    email = $('#email').val();
    msg = $('#message').val();

    this.message.push(name);
    this.message.push(email);
    this.message.push(msg);
  }
}
