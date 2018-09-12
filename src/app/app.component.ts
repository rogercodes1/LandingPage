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
    this.artists = [
{
"name": "Apple Music",
"startPrice": "$6.99",
"description": "Stream 45 million songs, ad-free on Apple Music. Shop HomePod, AirPods, and headphones. And build your entertainment collection with iPod and iTunes.",
"bio": "Barot has just finished his final year at The Royal Academy of Painting and Sculpture, where he excelled in glass etching paintings and portraiture. Hailed as one of the most diverse artists of his generation, Barot is equally as skilled with watercolors as he is with oils, and is just as well-balanced in different subject areas. Barot's collection entitled \"The Un-Collection\" will adorn the walls of Gilbert Hall, depicting his range of skills and sensibilities - all of them, uniquely Barot, yet undeniably different"
},
{
"name": "Spotify",
"startPrice": "$4.99",
"description": "Stream 45 million songs, ad-free on Apple Music. Shop HomePod, AirPods, and headphones. And build your entertainment collection with iPod and iTunes.",
"bio": "The Artist to Watch in 2012 by the London Review, Johnathan has already sold one of the highest priced-commissions paid to an art student, ever on record. The piece, entitled Gratitude Resort, a work in oil and mixed media, was sold for $750,000 and Jonathan donated all the proceeds to Art for Peace, an organization that provides college art scholarships for creative children in developing nations"
},
{
"name": "Pandora",
"startPrice": "$4.99",
"description": "Stream 45 million songs, ad-free on Apple Music. Shop HomePod, AirPods, and headphones. And build your entertainment collection with iPod and iTunes.",
"bio": "Hillary is a sophomore art sculpture student at New York University, and has already won all the major international prizes for new sculptors, including the Divinity Circle, the International Sculptor's Medal, and the Academy of Paris Award. Hillary's CAC exhibit features 25 abstract watercolor paintings that contain only water images including waves, deep sea, and river."
}
]
  }
}
