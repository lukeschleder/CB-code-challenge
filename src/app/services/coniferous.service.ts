import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Tree {
  name: string;
  description: string;
  imageUrl: string;

}

@Injectable({
  providedIn: 'root'
})
export class ConiferousService {

  private treesCollection: AngularFirestoreCollection<Tree>;

  private trees: Observable<Tree[]>;

  constructor( db: AngularFirestore) {
    this.treesCollection = db.collection<Tree>('trees');

    // listens for actions and grabs the id of that object
    this.trees = this.treesCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }
  // will get all trees from db
  getTrees() {
    return this.trees;
  }
  // will get tree of specific id
  getTree(id) {
    return this.treesCollection.doc<Tree>(id).valueChanges();
  }
  // will update tree name description or imageUrl identified by id
  updateTree(tree: Tree, id: string) {
    return this.treesCollection.doc(id).update(tree);
  }
  // will add new tree to tree list
  addTree(tree: Tree) {
    return this.treesCollection.add(tree);
  }
  // will delete tree from tree list
  removeTree(id) {
    return this.treesCollection.doc(id).delete();
  }

}
