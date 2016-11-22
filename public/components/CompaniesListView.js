import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
class CompaniesListView extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    let empty = ""
    if (!this.props.companies.length) empty = "NO DATA";
    return (
      <div className="CompaniesList">
        {this.props.companies.map(company => {
          return <div key={company.name}>{company.name}</div>;
        })}
        {empty}
      </div>
    );
  }
}

export default CompaniesListView;