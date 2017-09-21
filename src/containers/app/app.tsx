import './app.css';
import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter, Route/*, Link*/, Switch } from 'react-router-dom';
import { IGlobalState } from '../../models/state/globalState';
// import { AppActions } from '../../actions/appActions';

import HomePage from '../pages/home/homePage';
// import Contact from '../pages/contact/contact';
import './app-support';

// tslint:disable-next-line:interface-name
interface IAppProps {
  isInitializing: boolean;
  isLoading: boolean;
}
// tslint:disable-next-line:interface-name
interface IAppState {}

class App extends React.Component<IAppProps, IAppState> {
  constructor() {
    super();
  }

  componentWillMount() {
    // this.props.init();
  }
 
  render() {
    
    if (this.props.isInitializing) {return null;}

    // const date = this.props.currency && this.props.currency.date ? this.props.currency.date : ''; 
    // const currencyCode = this.props.currency && this.props.currency.base ? this.props.currency.base : ''; 
    // const rub = this.props.currency && this.props.currency.rates ? this.props.currency.rates.RUB : ''; 
    
    const Main = () => (
      <main>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </main>
  );

    return (
      <div className="app">
        {/*
        <Link to="/" >
          <img src={require('../../data/images/Logo.png')} alt="logo" width="168px" height="62px" />
        </Link>
        */}
        <section className="app-route">
          <Main />
        </section>
      </div>
    );
  }
}

// тут передается все данные из глобального хранилища  IGlobalState
// из которого мы берем только те данные, которые нужны в этом компоненте.
// PS в ownProps данные роутера (доп данные)
const mapStateToProps = (state: IGlobalState, ownProps: any) => {
  return {
    isInitializing: state.app.isInitializing
    , isLoading: state.app.isLoading
  }
}

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {
    // тут описывается сам Action с именем init (см. actions/appActions.tsx)
    // Функция init передается в пропсы (см. тут в interface IAppProps) 
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));