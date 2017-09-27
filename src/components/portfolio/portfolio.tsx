import './portfolio.css';
import * as React from 'react';
// import { Component }  from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import { AppActions } from '../../../actions/appActions';

// tslint:disable-next-line:interface-name
interface IPortfolioProps {
}
// tslint:disable-next-line:interface-name
interface IPortfolioState {}
interface IPhoto {
  imgUrl: string;
}

let WORK_DATA = [
  {
    id: 1,
    title: 'Title work 1',
    discription: 'Some text about work 1',
    category: 'develop',
    imgSrc: '../../data/images/portfolio/work-1.jpg',
    alt: 'work-1'
  },
  {
    id: 2,
    title: 'Title work 2',
    discription: 'Some text about work 2',
    category: 'design', // web-design
    imgSrc: '../../data/images/portfolio/work-2.jpg',
    alt: 'work-2'
  },
  {
    id: 3,
    title: 'Title work 3',
    discription: 'Some text about work 3',
    category: 'brand', // style
    imgSrc: '../../data/images/portfolio/work-3.jpg',
    alt: 'work-3'
  },
  {
    id: 4,
    title: 'Title work 4',
    discription: 'Some text about work 4',
    category: 'pack',
    imgSrc: '../../data/images/portfolio/work-4.jpg',
    alt: 'work-4'
  }
];
console.log(WORK_DATA);

class Photo extends React.Component<IPhoto> {
  constructor() {
    super();
  }
  render() {
    return(
      <div className="img-wrap">
        {/* tslint:disable-next-line:jsx-self-close */}
        <img src={this.props.imgUrl} data-category="design" alt="work-6" />
      </div>
    );
  }
}


class Portfolio extends React.Component<IPortfolioProps, IPortfolioState> {
  constructor() {
    super();
    
  }
  
  // componentWillMount() {}
  render() {
    return (
            <div className="portfolio-wrap">
        {/* tslint:disable-next-line:max-line-length */}
        <svg className="topdelta-right topdelta-right--gray" width="100%" height="170" viewBox="0 0 100 107" preserveAspectRatio="none">
          <path d="M0 0 L70 100 L100 0 Z"></path>
        </svg>
        <div className="portfolio">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
              <h2>Портфолио</h2>
              <p>Все  <span className="light">Разработка  Веб-дизайн  Стиль  Упаковка</span></p>
              </div>
            </div>
            
            <div className="row">
              {/* <elPhoto category={'design'} imgUrl={'require("../../data/images/portfolio/work-1.jpg")'} /> */}
              
              <Photo imgUrl={WORK_DATA[0].imgSrc} />
              <div className="img-wrap">
                {/* tslint:disable-next-line:jsx-self-close */}
                <img src={'../../data/images/portfolio/work-1.jpg'} data-category="design" alt="work-1" />
              </div>
              <div className="img-wrap">
                {/* tslint:disable-next-line:jsx-self-close */}
                <img src={require('../../data/images/portfolio/work-2.jpg')} data-category="design" alt="work-2" />
              </div>
              <div className="img-wrap">
                {/* tslint:disable-next-line:jsx-self-close */}
                <img src={require('../../data/images/portfolio/work-3.jpg')} data-category="design" alt="work-3" />
              </div>
              <div className="img-wrap">
                {/* tslint:disable-next-line:jsx-self-close */}
                <img src={require('../../data/images/portfolio/work-4.jpg')} data-category="design" alt="work-4" />
              </div>
            </div>
          </div>
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