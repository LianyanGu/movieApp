import { Component, OnInit } from '@angular/core';
import {HomeService} from "./home.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  genresList: any = {"genres": []};
  genres: any[] = [];

  constructor(private homeService: HomeService) {
  }

  ngOnInit() {
    this.getGenres();
  }

  getGenres() {
    this.homeService.getGenres()
      .subscribe(
        (response) => {
          this.genresList = response;
          for (let genre of this.genresList.genres) {
            this.genres.push(genre.name);
          }
        }
      )
  }

}
