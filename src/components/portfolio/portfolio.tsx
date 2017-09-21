import './portfolio.css';
import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import { AppActions } from '../../../actions/appActions';

// tslint:disable-next-line:interface-name
interface IPortfolioProps {}
// tslint:disable-next-line:interface-name
interface IPortfolioState {}

class Portfolio extends React.Component<IPortfolioProps, IPortfolioState> {
  constructor() {
    super();
  }

  componentWillMount() {}
  render() {
    return (
      <div className="portfolio-wrap">
        <svg className="topdelta-right topdelta-right--gray" width="100%" height="170" viewBox="0 0 100 102" preserveAspectRatio="none">
          <path d="M0 0 L70 100 L100 0 Z"></path>
        </svg>
        <div className="portfolio">
          <h2>Portfolio Block</h2>
        </div>  
      </div>
    );
  }
}

const mapStateToProps = (state: any, ownProps: any) => {
  return {
    // из State приходят данные
  };
};

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {
    // onClick: () => { dispatch()  }
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Portfolio));