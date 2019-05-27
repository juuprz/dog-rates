import { connect } from 'react-redux';
import Rate from '../components/Rate.jsx';
import { getCurrentDog } from '../actions/main.jsx';

const mapStateToProps = (state) => {
  return { currentDog: state.currentDog }
}
// to be removed once confirmed
const mapDispatchToProps = (dispatch) => ({
  GetRatedDogsList: () => 
    dispatch(getCurrentDog())
});

const RateContainer = connect(mapStateToProps, mapDispatchToProps)(Rate);
export default RateContainer;

