import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../services';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent implements OnInit {

  public count: number = 0;
  constructor(private sharedService: SharedService) {
  }

  ngOnInit() {
    this.sharedService.count.subscribe(count => {
      this.count = count || 0;
    });
  }

}
