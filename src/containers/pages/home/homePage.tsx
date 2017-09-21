import './homePage.css';
import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter, Route/*, Link*/ } from 'react-router-dom';
import Hero from '../../../components/hero/hero';
import AboutMe from '../../../components/aboutme/aboutme';
import Portfolio from '../../../components/portfolio/portfolio';
import Blog from '../../../components/blog/blog';
import Contacts from '../../../components/contacts/contacts';

// tslint:disable-next-line:interface-name
interface IHomePageProps {}
// tslint:disable-next-line:interface-name
interface IHomePageState {}

class HomePage extends React.Component<IHomePageProps, IHomePageState> {
  render() {
    return (
      <div>
        <Route path="/" component={Hero} />
        <Route path="/" component={AboutMe} />
        <Route path="/" component={Portfolio} />
        <Route path="/" component={Blog} />
        <Route path="/" component={Contacts} />
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
    onClick: () => { dispatch() }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomePage));
