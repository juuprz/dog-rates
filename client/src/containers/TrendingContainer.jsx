import { connect } from 'react-redux';
import Trending from '../components/Trending.jsx';
import { getTrendingDogs } from '../actions/main.jsx';

const mapStateToProps = (state, ownProps) => {
  return { trendingDoges: state.trendingDoges }
}
const mapDispatchToProps = (dispatch) => ({
  getTrendingDogsList: () =>
    dispatch(getTrendingDogs())
});

const TrendingContainer = connect(mapStateToProps, mapDispatchToProps)(Trending);
export default TrendingContainer;
