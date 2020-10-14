import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { emailRegx, title } from '../../config';
import { HOME } from '../../routes';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  returnUrl: string;
  submitted = false;
  loading = false;
  error = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    document.title = `Login - ${title}`
  }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.pattern(emailRegx), Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }


  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }


  signIn() {
    this.submitted = true;
    this.error = '';

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    this.loading = true;

    if(this.f.email.value == "" && this.f.password.value == ''){
      setTimeout(() => {
        this.error = '<label>Invalid <strong>Eamil</strong> or <strong>Password</strong></label>'
        this.loading = false;
      }, 2000)
    }else{
      setTimeout(() => this.router.navigate([`/${HOME}`]),3000)
    }
  }
}
