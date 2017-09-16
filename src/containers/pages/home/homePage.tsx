import './homePage.css';
import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Link } from 'react-router-dom';
import Card from '../../../components/products/card-lg/card-lg';

// tslint:disable-next-line:interface-name
interface IHomePageProps {}
// tslint:disable-next-line:interface-name
interface IHomePageState {}

class HomePage extends React.Component<IHomePageProps, IHomePageState> {
  render() {
    return (
      <div>
        <div className="row">
        <div className="col-lg-12 col-md-12">
            <div className="Slider">         
              <h1><span>УХОД ЗА ЛИЦОМ<br /></span>Утренний крем</h1>
              <div className="Slider--info">
                <p>
                <b>Morning cream<span className="dot">.</span></b>  - роскошный крем наполняет 
                энергией клетки кожи и заставляет их
                  работать в полную силу на протяжении всего дня, умножая жизненный
                   потенциал. Восстанавливает и укрепляет функционал кожи, который был заложен
                    природой от рождения и теряется со временем под негативным воздействием окружающей среды.
                </p>
              </div>
              <Link to="/" className="Slider--LinkBtn">ПОДРОБНЕЕ</Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-4">
            <Route path="/" component={Card} />
          </div>
          <div className="col-lg-4 col-md-4">
            <Route path="/" component={Card} />
          </div>
          <div className="col-lg-4 col-md-4">
            <Route path="/" component={Card} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any, ownProps: any) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {
    onClick: () => { dispatch()  }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomePage));
