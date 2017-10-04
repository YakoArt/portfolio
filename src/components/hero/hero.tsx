import './hero.css';
import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import { AppActions } from '../../../actions/appActions';

// tslint:disable-next-line:interface-name
interface IHeroProps {
  // Base: any;
  // cards: () => void;          
}
// tslint:disable-next-line:interface-name
interface IHeroState {
  // Base: any;
}
class Hero extends React.Component<IHeroProps, IHeroState> {
  constructor() {
    super();
  }

  componentWillMount() {
   // this.props.cards();
  }

  render() {
    // console.log(this.props.Base);
    // const Name = this.props.Base && this.props.Base.name ? this.props.Base.name : 'Нет данных';

  
    return (
      <div className="hero-wrap">
        <div className="container">
          <div className="row">
            <div className="col-lg-11 col-lg-offset-1">
              <div className="hero">
                <div className="hero--stance">
                  <h1>Yakoart</h1>
                  <p>
                    <a href="https://vk.com/id139081324" target="_blank"><i className="fa fa-vk fa-2x" aria-hidden="true"></i></a>
                    <a href="https://www.instagram.com/yako.art/" target="_blank"><i className="fa fa-instagram fa-2x" aria-hidden="true"></i></a>
                    <a href="https://github.com/YakoArt/portfolio/tree/develop" target="_blank"><i className="fa fa-github fa-2x" aria-hidden="true"></i></a>
                  </p>
                  <a className="btn-down" href="#aboutme"><i className="fa fa-angle-down fa-2x" aria-hidden="true"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
          {/* tslint:disable-next-line:max-line-length */}
          <svg className="delta delta-left delta-grey" width="21%" height="170" viewBox="0 0 100 102" preserveAspectRatio="none">
            <path d="M0 100 L100 100 L0 10 Z"></path>
          </svg>
          {/* tslint:disable-next-line:max-line-length */}
          <svg className="delta delta-right delta-grey" width="80%" height="170" viewBox="0 0 100 102" preserveAspectRatio="none">
            <path d="M0 100 L100 100 L100 10 Z"></path>
        </svg>
      </div>
    );
  }
}

const mapStateToProps = (state: any, ownProps: any) => {
  return {
    // из State приходят данные
    // Base: state.card.Base
  };
};

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {
    // cards: () => { dispatch(AppActions.cards());  }
    // onClick: () => { dispatch()  }
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Hero));