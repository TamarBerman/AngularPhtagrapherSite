import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BlogService } from './Services/blog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  gift?: string;
  box = document.getElementById('gift-html');

  constructor(public blogSer: BlogService) {
    this.blogSer.getGiftSubject().subscribe((g)=>{
     this.gift =g;
    })
  }
    title = 'ProgrammerBlog';
    dateToday:Date=new Date();
  ngOnInit(): void {
    // this.dateToday=new Date();
  }
timeStatus():string{
  debugger
  if (this.dateToday.getHours() >=6 && this.dateToday.getHours()<12)
    return ("good morning");
  else 
  if ((this.dateToday.getHours()) >=12 && this.dateToday.getHours()<18)
    return ("good afternoon");
    else
      return("good night");
  }
// changeColor(){
//   this.box?.classList.add('text-bg-dark p-1 text-center')
// }
}