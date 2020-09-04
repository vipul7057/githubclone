import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';
@Component({
  selector: 'app-createrepo',
  templateUrl: './createrepo.component.html',
  styleUrls: ['./createrepo.component.css']
})
export class CreaterepoComponent implements OnInit {
  name:string;

  constructor(private http:HttpClient,private router:Router ) { };

 async createrepo()
  {
    
    const namee = {
      name:this.name
    }
      const result = await this.http.post('http://localhost:3000/createrepo',namee).toPromise();
      if(result == '1')
      {
         this.router.navigate(['filepage'])
      }
      else
      {
        console.log("Error");
      } 
    
    }
  ngOnInit(): void {
    if(sessionStorage.getItem('uid'))
    {
      this.router.navigate(['create'])
    }
    else
    {
      alert("Please LogIn first");
      this.router.navigate(['1']);

    }
  }

  signout(page)
{
  sessionStorage.removeItem('uid');
  this.router.navigate([page]);
}
showprofile(page)
{
   this.router.navigate(['profile']);
}

}
