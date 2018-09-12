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
"description": "Stream 45 million songs, ad-free on Apple Music. Shop HomePod, AirPods, and headphones. And build your entertainment collection with iPod and iTunes.",

},
{
"name": "Student",
"startPrice": "Professional",
"description": "Stream 45 million songs, ad-free on Apple Music. Shop HomePod, AirPods, and headphones. And build your entertainment collection with iPod and iTunes.",

},
{
"name": "Family",
"startPrice": "Free (with Ads), $4.99",
"description": "Pandora is free, personalized radio that plays music you'll love. Discover new music and enjoy old favorites. ",

}
]
  }
}
