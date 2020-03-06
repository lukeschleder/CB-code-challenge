import { Component, OnInit } from '@angular/core';
import { Tree, ConiferousService } from '../services/coniferous.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  // creates array to hold information from db
  trees: Tree[];

  constructor(private coniferousService: ConiferousService) { }
  // calls getTrees function from coniferousService to populate home page
  ngOnInit() {
    this.coniferousService.getTrees().subscribe(res => {
      this.trees = res;
    });
  }
  // calls removeTree function from coniferousService on home page
  remove(item) {
    this.coniferousService.removeTree(item.id);
  }

}
