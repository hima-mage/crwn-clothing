import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import {createStructuredSelector} from 'reselect'
import CollectionsOverview from "../../component/collection-overview/collection-overview.component";
import ColectionPage from "../collection/collection.component"; 
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";
import WithSpinner from "../../component/with-spinner/with-spinner.component";
import { selectIsCollectionFetching , selectIsCollectionsLoaded } from "../../redux/shop/shop.selectors";
const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const ColectionPageWithSpinner = WithSpinner(ColectionPage);

class ShopPage extends React.Component {
  

  componentDidMount() {
    const {fetchCollectionsStartAsync} = this.props
    fetchCollectionsStartAsync();
  }

  render() {
    const { match, isFetchingCollections, isCollectionsLoaded } = this.props; 
    return (
      <div>
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner isLoading={!isCollectionsLoaded} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <ColectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props} />
          )}
        /> 
      </div>
    );
  }
}


const mapStateToProps = createStructuredSelector({
  isFetchingCollections : selectIsCollectionFetching, 
  isCollectionsLoaded: selectIsCollectionsLoaded
})
const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync : () => dispatch(fetchCollectionsStartAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
