import './portfolio.css';
import * as React from 'react';
// import { Component }  from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import { AppActions } from '../../../actions/appActions';

// tslint:disable-next-line:interface-name
interface IPortfolioProps {
  // imgbase?: any;
}
// tslint:disable-next-line:interface-name
interface IPortfolioState {
  displayedCategory: any;
  // active: string;
}
interface IPhoto {
  imgUrl?: string;
  imgSrc?: string;
  category?: string;
  id?: string;
}

let WORK_DATA = [
  {
    id: 1,
    title: 'Title work 1',
    discription: 'Some text about work 1',
    category: 'Разарботка', // develop Разарботка 
    imgSrc: require('../../data/images/portfolio/work-1.jpg'),
    alt: 'work-1'
  },
  {
    id: 2,
    title: 'Title work 2',
    discription: 'Some text about work 2',
    category: 'Веб-дизайн', // design web-design Веб-дизайн
    imgSrc: require('../../data/images/portfolio/work-2.jpg'),
    alt: 'work-2'
  },
  {
    id: 3,
    title: 'Title work 3',
    discription: 'Some text about work 3',
    category: 'Стиль', // brand style Стиль
    imgSrc: require('../../data/images/portfolio/work-3.jpg'),
    alt: 'work-3'
  },
  {
    id: 4,
    title: 'Title work 4',
    discription: 'Some text about work 4',
    category: 'Упаковка', // pack Упаковка
    imgSrc: require('../../data/images/portfolio/work-4.jpg'),
    alt: 'work-4'
  },
  {
    id: 5,
    title: 'Title work 5',
    discription: 'Some text about work 5',
    category: 'Упаковка', // pack Упаковка
    imgSrc: require('../../data/images/portfolio/work-5.jpg'),
    alt: 'work-5'
  },
  {
    id: 6,
    title: 'Title work 6',
    discription: 'Some text about work 6',
    category: 'Веб-дизайн', // design web-design Веб-дизайн
    imgSrc: require('../../data/images/portfolio/work-6.jpg'),
    alt: 'work-6'
  }
];

class FilterNav extends React.Component<any, any> {
  constructor(props:any) {
    super(props);
  }
  render() {
    return(
        /* Ожидаемый список категорий : Разработка  Веб-дизайн  Стиль  Упаковка */   
        <a onClick={this.props.onClick} className='light'> {this.props.category} </a>
    );
  }
}

class Photo extends React.Component<IPhoto> {
  constructor(props:any) {
    super(props);
  }
  render() {
    return(
      <div  className="portfolio--img-wrap" key={this.props.id}>
        <img src={this.props.imgUrl} data-category={this.props.category} />
      </div>
    );
  }
}

class Portfolio extends React.Component<IPortfolioProps, IPortfolioState> {
  constructor(props:any) {
    super(props);
    this.state = {
      displayedCategory: WORK_DATA
    };
  }

  selectCategory = (element:any) => {
    // console.log('Этот елемент : ' + element);
    /* Перевод имени категории в нижний регистр */
    let categoryName: any = element.toLowerCase();
    let displayedCategory = WORK_DATA.filter(function(el) {
      let searchValue: string = el.category.toLowerCase();
      return searchValue.indexOf(categoryName) !== -1;
    });
    this.setState({
      displayedCategory : displayedCategory
    });
  }
  resetFilter = (element:any) => {
    this.setState({
      displayedCategory: WORK_DATA
      
    });
  }
  
  render() {
    /*
    FilterNav :
    Создаем пустой массив, куда запишем все категории, которые пришли из WORK_DATA
    При условии что этой категории нет
    */
    // let btnClass: string = this.state.active ? 'active' : '';
    let getIniqueCategory:any = [];
    // let categoryToSelect: any = this.selectCategory;
    WORK_DATA.forEach((el) => {
      if(getIniqueCategory.indexOf(el.category) === -1) {
        getIniqueCategory.push(el.category);
      }
    });
    // let active: string = this.state.active;
    // console.log(active);

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
                <div className="portfolio--filter-wrap">
                  <a onClick={this.resetFilter}>Все</a>
                  {
                    /*
                    Генерируем список категорий, вызывая елемент FilterNav,
                    куда для каждого через props передаем категорию(el.category) и соответствующий index (i) */
                    getIniqueCategory.map((el:string, i:string) => {
                      // let btnClick:any = categoryToSelect.bind(el);
                      return <FilterNav onClick={this.selectCategory.bind(null,el)} category={el} key={i}/>
                    })
                  }
                </div>
              </div>
            </div>
            <div className="row">
              {
                this.state.displayedCategory.map((el:any) => {
                  return <Photo key={el.id} imgUrl={el.imgSrc} category={el.category}/>
                })
              }
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