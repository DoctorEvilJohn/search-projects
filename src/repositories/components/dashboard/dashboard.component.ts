import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ApiService} from '../../services';
import { NgxSpinnerService } from 'ngx-spinner';
import {SharedService} from '../../services';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @ViewChild('searchInput') searchInput: ElementRef;

  public repositories = [];
  public favorites = [];
  public languages = [];
  public searchString: string;
  public showFilter = false;
  public languageFilter = '';

  constructor(private apiService: ApiService,
              private spinner: NgxSpinnerService,
              private sharedService: SharedService) { }

  ngOnInit() {
    this.favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    this.sharedService.changeCount(this.favorites.length);
    this.spinner.show();
    this.apiService.fetchRepositories()
      .subscribe(repos => {
        this.spinner.hide();
        this.repositories = repos['items'];
        this.languages = this.getLanguages(this.repositories);
      });

    Observable.fromEvent(this.searchInput.nativeElement, 'keyup')
      .map((evt: any) => evt.target.value)
      .debounceTime(1000)
      .subscribe((text: string) => this.searchRepositories(text || null));
  }

  searchRepositories(searchString) {
    this.languageFilter = '';
    this.apiService.fetchRepositories(searchString)
      .subscribe(repos => {
        this.repositories = repos['items'];
        this.languages = this.getLanguages(this.repositories);
      });
  }

  addToFavorites(repository) {
    if (this.favorites.length) {
      const index = this.favorites.map((obj) => obj.id).indexOf(repository.id);
      if (index === -1) {
        this.sharedService.flag(`You added "${repository.name}" to Favorites...`, 'success');
        this.favorites.push(repository);
        this.sharedService.changeCount(this.favorites.length);
        localStorage.setItem('favorites', JSON.stringify(this.favorites));
      } else {
        this.sharedService.flag(`Repository "${repository.name}" already added to Favorites...`, 'success');
      }
    } else {
      this.favorites.push(repository);
      this.sharedService.changeCount(this.favorites.length);
      this.sharedService.flag(`You added "${repository.name}" to Favorites...`, 'success');
      localStorage.setItem('favorites', JSON.stringify(this.favorites));
    }
  }

  getLanguages(repositories) {
    const obj = {};
    for (let i = 0; i < repositories.length; i++) {
      if (repositories[i].language !== null) {
        const str = repositories[i].language;
        obj[str] = true;
      }
    }
    return Object.keys(obj);
  }

}
