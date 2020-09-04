import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';
@Component({
  selector: 'app-showfiles',
  templateUrl: './showfiles.component.html',
  styleUrls: ['./showfiles.component.css']
})
export class ShowfilesComponent implements OnInit {

   value  :any
 constructor(private http:HttpClient,private router:Router ) { };
  ngOnInit(): void {
    if(sessionStorage.getItem('uid'))
    {
      this.router.navigate(['showfile']);
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
  async showfiles()
  {
     const result = await this.http.post('http://localhost:3000/showfiles','').toPromise();
     this.value = result;
     
  }
}
