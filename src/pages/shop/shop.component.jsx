import React from "react";
import { Route } from "react-router-dom";
import {connect} from 'react-redux'
import CollectionOverview from "../../component/collection-overview/collection-overview.component";
import ColectionPage from "../collection/collection.component";
import {
  firestore,
  convertCollectionSnapshotToMap,
} from "../../firebase/firebase.utils";
import {updateCollections } from '../../redux/shop/shop.actions'
class ShopPage extends React.Component {
  // this unsubscribtion will be for our collection which we get from the firestore
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const {updateCollections } = this.props 
    const collectionRef = firestore.collection("collections");
    // when collection called or updated it send snapshot when this code rendered
    collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap =  convertCollectionSnapshotToMap(snapshot);
      updateCollections(collectionsMap)
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

const mapDispatchToProps = dispatch => ({
  updateCollections : collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);
