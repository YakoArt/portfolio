import './contact.css';
import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


interface IContactProps{

}

interface IContactState{

}

class Contact extends React.Component<IContactProps, IContactState> {
  render() {
    return (
      <div>
        Contact page
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Contact));
