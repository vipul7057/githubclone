import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient,HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
   email: string;
  c: any;
  constructor(private http: HttpClient, private router: Router) { }

   async ngOnInit(): Promise<void> {
    console.log(sessionStorage.getItem('uid'));
    const value = {
      e: sessionStorage.getItem('uid')
    }
    const items = await this.http.post('http://localhost:3000/readuser2', value).toPromise();
    this.c = items;
    console.log(this.c);

  }

  async deleteAccount() {
    const value = {
      email: sessionStorage.getItem('uid')
    }

    const url = "http://localhost:3000/deleteuser";
    const result = await this.http.post(url, value).toPromise();

    if (result == '1') {
      alert("user Successfully deleted ");
      sessionStorage.removeItem('uid');
      this.router.navigate(['1']);
    } else {
      alert("Something Went Wrong");
    }


  }

  signout(page)
{
  sessionStorage.removeItem('uid');
  this.router.navigate([page]);
}
}
