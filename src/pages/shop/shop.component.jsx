import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../../component/preview-collection/collection-preview.component";
import { selectCollections } from "../../redux/shop/shop.selectors";
const ShopPage = ({ collections }) => (
  <div>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
})
export default connect(mapStateToProps) (ShopPage);
