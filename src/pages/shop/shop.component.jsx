import React from "react";
import { Route } from "react-router-dom";
import CollectionOverview from "../../component/collection-overview/collection-overview.component";
import ColectionPage from "../collection/collection.component";
import {
  firestore,
  convertCollectionSnapshotToMap,
} from "../../firebase/firebase.utils";

class ShopPage extends React.Component {
  // this unsubscribtion will be for our collection which we get from the firestore
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const collectionRef = firestore.collection("collections");
    // when collection called or updated it send snapshot when this code rendered
    collectionRef.onSnapshot(async (snapshot) => {
      convertCollectionSnapshotToMap(snapshot);
    });
  }

  render() {
    const { match } = this.props;
    return (
      <div>
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route path={`${match.path}/:collectionId`} component={ColectionPage} />
      </div>
    );
  }
}

export default ShopPage;
