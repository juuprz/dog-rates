import { connect } from 'react-redux';
import App from '../components/App.jsx';
import { changeView, getTrendingDogs, getCurrentDog} from '../actions/main.jsx';

const mapDispatchToProps = (dispatch) => ({
  changeCurrentView: (selectedView) => {
    dispatch(changeView(selectedView))
  },
  getTrendingDogsList: () => {
    dispatch(getTrendingDogs())
  },
  GetRatedDogsList: () =>
    dispatch(getCurrentDog())
})
const mapStateToProps = (state) => ({
  view: state.view,
})

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
export default AppContainer;