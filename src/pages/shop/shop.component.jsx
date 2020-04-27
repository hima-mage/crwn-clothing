import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux"; 
import CollectionsOverviewContainer from "../../component/collection-overview/collection-overview.container";
import ColectionPageContainer from "../collection/collection.container"; 
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions"; 

class ShopPage extends React.Component {
  

  componentDidMount() {
    const {fetchCollectionsStartAsync} = this.props
    fetchCollectionsStartAsync();
  }

  render() {
    const { match    } = this.props; 
    return (
      <div>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}/>
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={  ColectionPageContainer } />
          )}
        /> 
      </div>
    );
  }
}


 
const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync : () => dispatch(fetchCollectionsStartAsync())
});

export default connect(null, mapDispatchToProps)(ShopPage);
