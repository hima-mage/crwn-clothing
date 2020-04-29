import React, {useEffect} from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux"; 
import CollectionsOverviewContainer from "../../component/collection-overview/collection-overview.container";
import ColectionPageContainer from "../collection/collection.container"; 
import { fetchCollectionsStart } from "../../redux/shop/shop.actions"; 

const  ShopPage = ({fetchCollectionsStart, match}) => {
  useEffect(() => {
    fetchCollectionsStart()
  }, [fetchCollectionsStart])
  return (
    <div>
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}/>
          
      <Route
        path={`${match.path}/:collectionId`}
        component={  ColectionPageContainer } />
        
    </div>
  );
   
} 

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart : () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);
