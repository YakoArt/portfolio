import './portfolio.css';
import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import FilterItems from './elements/filter_items';
import PhotoItems from './elements/photo_items';

import { AppActions } from '../../actions/appActions';
// import { setCategoryWork } from '../../actions/filterActions';


interface IPortfolioProps {
  Works: any;           // массив всех работ (изм. от выбранной категории)
  СategoryList: any;    // списко доступных категорий
  Category: any;        // выбранная категория
  getWorks: () => void;
  setCategoryWork: () => void;
}
interface IPortfolioState {
  Category: string;
  newCategory:string;
}

class Portfolio extends React.Component<IPortfolioProps, IPortfolioState> {
  constructor() {
    super()
    this.setCategoryWorks = this.setCategoryWorks.bind(this)
    /*
    this.state = {
      Category: !!this.props.Category ? this.props.Category: 'Все'*/
    };
  
  componentWillMount() {
    /*
    componentWillMount :
    Вызывается один раз, на клиенте и сервере, непосредственно перед началом рендеринга.
    Вызываеься getWorks(), которая обновляет State перед началом рендеринга.
    */
    this.props.getWorks();
  }
  /*
  setCategoryWorks = (newCategoryName: string) => {
    this.setState({
      Category: newCategoryName
    });
  */
  
  setCategoryWorks = (elem:any) => {
    /*this.setState({
      Category: elem.target.textContent
    });
    */
    // this.props.setCategoryWork("elem.target.textContent")
    //this.props.Category(this.state.Category);
    console.log(this.props.setCategoryWork);
    console.log('newCategoryName : ' + elem.target.textContent);
  }

  render() {
    let newWorks: any = this.props.Works;
    let CategoryList: any = this.props.СategoryList;
    let setCategory: any = this.props.Category;
    /*
    console.log('newWorks');
    console.log(newWorks);
    console.log('CategoryList');
    console.log(CategoryList);
    */
    console.log(this);
    console.log('setCategory');
    console.log(setCategory);

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
                  {/* Генерируем список категорий, вызывая елемент FilterNav,
                  куда для каждого через props передаем категорию(el.category) и соответствующий index (i) */}
                  { 
                    CategoryList.map((el:string, i:string) => {
                      return <FilterItems category={el} key={i} setCategory={setCategory} setCategoryWorks={this.setCategoryWorks}/>
                    })
                  }
                </div>
              </div>
            </div>
            <div className="row">
            {
              newWorks.map((el:any) => {
                return <PhotoItems key={el.id} imgUrl={el.imgSrc} category={el.category}/>
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
    Works: state.worksReducer.worksState,
    СategoryList: state.worksReducer.categoryList,
    Category: state.worksReducer.Category
  };
};

const mapDispatchToProps = (dispatch: any, ownProps: any,) => {
  return {
    getWorks: () => { dispatch(AppActions.getWorks()); },
    setCategoryWorks: (Category:string) => { dispatch(AppActions.setCategoryWork(Category)); },
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Portfolio));