import {connect} from "react-redux";
import SearchForm from "./search_form.jsx";
import {fetchRoute} from "../actions/directions_actions.js";
import {toggleShowSearch, toggleAllDirections, toggleTripInfo, toggleTurnByTurn} from '../actions/ui_actions';

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
  fetchRoute: (route, query) => dispatch(fetchRoute(route, query)),
  toggleSearch: () => dispatch(toggleShowSearch()),
  toggleAllDirections: () => dispatch(toggleAllDirections()),
  toggleTripInfo: () => dispatch(toggleTripInfo()),
  toggleTurnByTurn: () => dispatch(toggleTurnByTurn())
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
