import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import {createStructuredSelector} from 'reselect'
import CollectionsOverview from "../../component/collection-overview/collection-overview.component";
import ColectionPage from "../collection/collection.component"; 
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";
import WithSpinner from "../../component/with-spinner/with-spinner.component";
import { selectIsCollectionFetching } from "../../redux/shop/shop.selectors";
const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const ColectionPageWithSpinner = WithSpinner(ColectionPage);

class ShopPage extends React.Component {
  

  componentDidMount() {
    const {fetchCollectionsStartAsync} = this.props
    fetchCollectionsStartAsync();
  }

  render() {
    const { match, isCollectionFetching } = this.props; 
    return (
      <div>
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <ColectionPageWithSpinner isLoading={isCollectionFetching} {...props} />
          )}
        /> 
      </div>
    );
  }
}


const mapStateToProps = createStructuredSelector({
  isCollectionFetching : selectIsCollectionFetching
})
const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync : () => dispatch(fetchCollectionsStartAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
