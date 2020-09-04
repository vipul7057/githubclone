import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators, FormArray, FormBuilder} from '@angular/forms'
import { Router } from '@angular/router';
import { HttpClient,HttpClientModule} from "@angular/common/http";
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
    username:string;
    password:string;
    email:string;

  constructor(
    private router:Router,
    private http:HttpClient
) { }

  ngOnInit(): void {
  }
   forms = new FormGroup({
     username:new FormControl('',Validators.required),
     email:new FormControl('',[Validators.required,
    Validators.pattern('[a-z]+[a-z0-9]+@[a-z0-9.-]+.[a-z]{2,}$')]),
     password:new FormControl('',[Validators.required,Validators.pattern('(?=.[0-9])(?=.[a-z])(?=.*[A-Z]).{8,}')]),
   })


   async registerUser()
    {
      
        const value = {
           username:this.forms.get('username').value,
           password:this.forms.get('password').value,
           email:this.forms.get('email').value,
        }

        const url1 = "http://localhost:3000/readuser1";
      const avail = await this.http.post(url1, value).toPromise();
    
      if (avail == '1') {
        const url = "http://localhost:3000/adduser";
        const response = await this.http.post(url, value).toPromise();
        alert("Successfull ! Redirecting to Login Page");
       this.router.navigate(['1'])
      } else {
        alert("Email already registered!!!");
        window.location.reload();
      }   
    }

  
  // get email()
  // {
  //   return this.form.get('email')
  // }
  // get user()
  // {
  //   return this.form.get('user')
  // }
  get passwordd()
  {
    return this.forms.get('password');
  }


  gotologin(page){
    this.router.navigate([page])
  }
}
