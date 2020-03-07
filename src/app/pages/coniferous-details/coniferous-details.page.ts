import { Component, OnInit } from '@angular/core';
import { Tree, ConiferousService } from 'src/app/services/coniferous.service';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-coniferous-details',
  templateUrl: './coniferous-details.page.html',
  styleUrls: ['./coniferous-details.page.scss'],
})
export class ConiferousDetailsPage implements OnInit {

  tree: Tree = {
    name: 'White Pine',
    description: 'Monarch of the North',
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

  async saveTree() {
    const loading = await this.loadingController.create({
      message: 'Saving Tree..'
    });
    await loading.present();

    if (this.treeId) {
      this.coniferousService.updateTree(this.tree, this.treeId).then(() => {
        loading.dismiss();
        this.nav.navigateBack('home');
      });
    } else {
      this.coniferousService.addTree(this.tree).then(() => {
        loading.dismiss();
        this.nav.navigateBack('home');
      });
    }

  }

}
