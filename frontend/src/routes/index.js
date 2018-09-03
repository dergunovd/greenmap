import React from 'react';
import { Provider } from 'react-redux';
import { Route, Router } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import CityMap from '../components/CityMap/CityMap';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import store from '../store';
import Registration from '../components/Registration/Registration';
import Login from '../components/Login/Login';

const history = createHistory();

class Routes extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <div className="wrap">
            <Header />
            <Route exact path="/" component={CityMap} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/registration" component={Registration} />
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default Routes;
