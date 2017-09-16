import './app.css';
import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Link, Switch } from 'react-router-dom';
import { IGlobalState } from '../../models/state/globalState';
import { AppActions } from '../../actions/appActions';

import HomePage from '../pages/home/homePage';
import Contact from '../pages/contact/contact';
import './app-support';
// import logo = require('./data/images/Logo.png');

// tslint:disable-next-line:interface-name
interface IAppProps {
  isInitializing: boolean;
  isLoading: boolean;
  currency: any;
  init: () => void;
}
// tslint:disable-next-line:interface-name
interface IAppState {}

class App extends React.Component<IAppProps, IAppState> {
  constructor() {
    super();
  }

  componentWillMount() {
    this.props.init();
  }
 
  render() {
    
    if (this.props.isInitializing) {return null;}

    const date = this.props.currency && this.props.currency.date ? this.props.currency.date : ''; 
    const currencyCode = this.props.currency && this.props.currency.base ? this.props.currency.base : ''; 
    const rub = this.props.currency && this.props.currency.rates ? this.props.currency.rates.RUB : ''; 
    
    const Main = () => (
      <main>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/contact" component={Contact}/>
        </Switch>
      </main>
  );

    return (
      <div className="App">
        <header className="App-Header">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-3">
                <div className="App-Logo">
                  <Link to="/" >
                    <img src={require('../../data/images/Logo.png')} alt="logo" width="168px" height="62px" />
                  </Link>
                </div>
              </div>
              <div className="App-Nav col-lg-8 col-md-8">
                <div className="App-Nav--User"><span>РЕГИСТРАЦИЯ</span>ВОЙТИ</div>
                <nav className="App-Nav--Navigation">
                  <ul>
                    <li><Link to="/" >ГЛАВНАЯ</Link></li>
                    <li><Link to="/" >КАТАЛОГ</Link></li>
                    <li><Link to="/" >ДЛЯ МУЖЧИН</Link></li>
                    <li><Link to="/" >ВОПРОС-ОТВЕТ</Link></li>
                    <li><Link to="/contact" >КОНТАКТЫ</Link></li>
                  </ul>
                </nav>
              </div>
              <div className="col-lg-1 col-md-1">
                <div className="App-Cart">
                  <div className="App-Cart--Count">0</div>
                  <i className="fa fa-shopping-cart fa-2x" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className="App-Route">
          <div className="container">
            
              <Main />

          </div>  
        </section>
        <footer className="App-Footer">
          <div className="container">
            <div className="row">
              <ul>
                <li><span>today: {date}</span></li>
                <li><span>{currencyCode}: {rub}</span></li>
              </ul>
            </div>
          </div>
        </footer>
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
    , currency: state.app.currency
  }
}

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {
    // тут описывается сам Action с именем init (см. actions/appActions.tsx)
    // Функция init передается в пропсы (см. тут в interface IAppProps) 
    init: () => { dispatch(AppActions.init());  }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));