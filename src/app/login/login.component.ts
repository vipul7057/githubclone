import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http' 
import { Router } from '@angular/router';
import {FormGroup,FormControl, Validators, FormArray, FormBuilder} from '@angular/forms'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string;
  password:string;
constructor(private http:HttpClient,private router:Router) { }

forms = new FormGroup({
     email:new FormControl('',Validators.required),
     password:new FormControl('',Validators.required),
   })

   
async readdata()
{
 const value = {
    
           password:this.forms.get('password').value,
           email:this.forms.get('email').value,
        }
      const result = await this.http.post('http://localhost:3000/user',value).toPromise();
      
        console.log(result);
      if(result == 1)
      {
        sessionStorage.setItem('uid',this.forms.get("email").value);
        this.router.navigate(['homepage']);
      }   
      else
      {
        alert("Wrong email");
      }
}

  ngOnInit(): void {
  }
}
