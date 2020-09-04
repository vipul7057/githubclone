import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    if(sessionStorage.getItem('uid'))
    {
      this.router.navigate(['homepage'])
    }
    else
    {
      alert("Please LogIn first");
      this.router.navigate(['1'])

    }
  }
  signout(page)
{
  sessionStorage.removeItem('uid');
  this.router.navigate([page]);
}
showprofile(page)
{
   this.router.navigate([page]);
}
}
