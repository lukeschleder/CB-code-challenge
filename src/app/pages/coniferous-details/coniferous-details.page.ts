import { Component, OnInit } from '@angular/core';
import { Tree, ConiferousService } from 'src/app/services/coniferous.service';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';

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


  constructor(private coniferousService: ConiferousService, private route: ActivatedRoute, private loadingController: LoadingController) { }

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

  saveTree() {

  }

}
