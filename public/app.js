
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'

import Store from 'components/Store'
import CompaniesListView from 'components/CompaniesListView'
import NoMatchView from 'components/NoMatchView'

class Application extends Component {
  constructor (props) {
    super(props);
  }
  render () {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={() => (<CompaniesListView companies={this.props.store.companies} />)}></Route>
        <Route path="*" component={NoMatchView}></Route>
      </Router>
    );
  }
}

ReactDOM.render(
  <Application store={Store} />,
  document.getElementById('app-root')
);
