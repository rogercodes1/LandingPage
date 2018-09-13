import { Component } from '@angular/core';
// import (CommonModule) from '@angular/core'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template:`<h1> Music Unlimited </h1>`
  styleUrls: ['./app.component.css'],
  // styles: [`
  //   .list-group-item:first-child{
  //     border-top-left-radius: 0;
  //     border-top-right-radius: 0;
  //     border-top: 0;
  //   }`]
})
export class AppComponent {
  title = 'Music Plans';
  email: string;
  plans: object;
  perks: object;

  selectPlan(e, item){
    console.log(e);
    this.email = item.name
  }
  checkPlan(e, item){
    console.log(e);
  }

  constructor(){
    this.email = '';
    this.perks =[
      {
        "title": "Millions of Songs ",
        "feature": "Access to over 35 million songs. Access to podcasts and audiobooks.",
        "icon": "glyphicon glyphicon-heart",
      },
      {
        "title": "Go Anywhere",
        "feature": "Travel abroad with your music. On demand mobile access.",
        "icon": "glyphicon glyphicon-globe",
      },
      {
        "title": "No interruptions ",
        "feature": "No ad interruptions.Listen without an internet connection.",
        "icon": "glyphicon glyphicon-headphones",
      },
    ];

    this.plans = [
{
"name": "Free Trial",
"startPrice": "30 days",
"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum venenatis nulla vitae sodales. Phasellus dictum, ipsum ac posuere congue, nisl metus auctor dolor, vitae pharetra massa velit nec velit.",

},
{
"name": "Student",
"startPrice": "Professional",
"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum venenatis nulla vitae sodales. Phasellus dictum, ipsum ac posuere congue, nisl metus auctor dolor, vitae pharetra massa velit nec velit.",

},
{
"name": "Family",
"startPrice": "Free (with Ads), $4.99",
"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum venenatis nulla vitae sodales. Phasellus dictum, ipsum ac posuere congue, nisl metus auctor dolor, vitae pharetra massa velit nec velit. ",

}
]
  }
}
