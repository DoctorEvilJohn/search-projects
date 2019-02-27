import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.scss']
})
export class RepositoryComponent implements OnInit {

  @Input() repository: any;
  @Input() dashboard: boolean;
  @Output() selected = new EventEmitter<object>();
  constructor() { }

  ngOnInit() {
  }

  addToFavorites(repository) {
    this.selected.emit(repository);
  }
}
