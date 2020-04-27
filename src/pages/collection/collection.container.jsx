import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selectors";
import WithSpinner from "../../component/with-spinner/with-spinner.component";
import ColectionPage from "./collection.component";

const mapStateToProps = createStructuredSelector({
  isLoading:  (state) => !selectIsCollectionsLoaded(state),
});

const ColectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(ColectionPage);

export default ColectionPageContainer;
