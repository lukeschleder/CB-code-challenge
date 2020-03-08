import { Component, OnInit } from '@angular/core';
import { Tree, ConiferousService } from 'src/app/services/coniferous.service';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  tree: Tree = {
    name: '',
    description: '',
    imageUrl: ''
  }

  treeId = null;


  constructor(private coniferousService: ConiferousService, private route: ActivatedRoute,
     private loadingController: LoadingController, private nav: NavController) { }

  ngOnInit() {
    this.treeId = this.route.snapshot.params['id'];
    if (this.treeId) {
      this.loadTree();
    }
  }

  async loadTree() {
    const loading = await this.loadingController.create({
      message: 'Loading Trees..'
    });
    await loading.present();

    this.coniferousService.getTree(this.treeId).subscribe(res => {
      loading.dismiss();
      this.tree = res;
    });
  }

}
