import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpClientModule} from "@angular/common/http";
import { Router } from '@angular/router';
import {FormGroup,FormControl, Validators, FormArray, FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  email:string;
  password:string;


   constructor(
    private router:Router,
    private http:HttpClient
) { }

  ngOnInit(): void {
  }

forms = new FormGroup({
     email:new FormControl('',Validators.required),
     password:new FormControl('',Validators.required)
   })

   async updatepassword()
    {
        const value = {
          password:this.forms.get('password').value,
           email:this.forms.get('email').value
        }
      const result = await this.http.post('http://localhost:3000/update',value).toPromise();   
      if(result == '1')
      {
        this.router.navigate(['1']);
      }
      else
      {
        alert("Failed to Update");
      }
    }
}
