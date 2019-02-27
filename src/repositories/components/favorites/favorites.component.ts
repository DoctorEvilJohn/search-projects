import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  public favorites: any [] = [];
  constructor() { }

  ngOnInit() {
    this.favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  }

}
