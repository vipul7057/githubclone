import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';
@Component({
  selector: 'app-filepage',
  templateUrl: './filepage.component.html',
  styleUrls: ['./filepage.component.css']
})
export class FilepageComponent implements OnInit {
 filename:string;
 filecontent:any;
editfilename:any

 constructor(private http:HttpClient,private router:Router ) { };

  ngOnInit(): void {
       if(sessionStorage.getItem('uid'))
    {
      this.router.navigate(['filepage']);
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

 async addfile()
  {
    document.getElementById("contentbox").style.display = "block";
    const name = {
      filename :this.filename,
      filecontent:this.filecontent
    }

     const result = await this.http.post('http://localhost:3000/createfile',name).toPromise();
  }

  async editfile()
  {
    document.getElementById("contentbox").style.display = "block";
    const edit = {
     editfilename :this.editfilename,
      filecontent:this.filecontent
    }
    const result = await this.http.post('http://localhost:3000/editfile',edit).toPromise();
  }




}
