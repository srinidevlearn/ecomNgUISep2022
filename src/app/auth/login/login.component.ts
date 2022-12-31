import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { JwtService } from 'src/app/shared/service/jwt.service';
import { ApiService } from 'src/app/shared/service/prod-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  loginFormModel: { email: string; password: string } = {
    email: 'srini@gmail.com',
    // email:"srini2@gmail.com", // for non-inventory
    password: '123SD',
    // password:"m38rmF$" // for non-inventory
  };

  constructor(public fb: FormBuilder, private api: ApiService,private jwtHelper:JwtService,private router:Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({ ...this.loginFormModel });
  }

  login() {
    this.api
      .login(this.loginForm.value)
      .pipe(take(1))
      .subscribe((d: any) => {
        if (d?.status.toLowerCase() === 'success'){
          localStorage.setItem('auth', d?.data?.token);
          this.jwtHelper.loadToStorage();
          this.router.navigateByUrl('/shopping');
        }
      });
  }
}
