import { Component } from '@angular/core';

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
  title = 'LandingPage';
  query: string;
  artists: object;

  showArtist(e, item){
    console.log(e);
    this.query = item.name
  }

  constructor(){
    this.query = '';
    this.plans = [
{
"name": "Apple Music",
"startPrice": "$6.99",
"description": "Stream 45 million songs, ad-free on Apple Music. Shop HomePod, AirPods, and headphones. And build your entertainment collection with iPod and iTunes.",

},
{
"name": "Spotify",
"startPrice": "$4.99",
"description": "Stream 45 million songs, ad-free on Apple Music. Shop HomePod, AirPods, and headphones. And build your entertainment collection with iPod and iTunes.",

},
{
"name": "Pandora",
"startPrice": "Free (with Ads), $4.99",
"description": "Pandora is free, personalized radio that plays music you'll love. Discover new music and enjoy old favorites. ",

}
]
  }
}
