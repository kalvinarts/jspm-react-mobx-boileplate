import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
class CompaniesListView extends Component {
  renderCompanies() {
    return this.props.companies.map(company => {
      return <div key={company.name}>{company.name}</div>;
    });
  }

  render () {
    let empty = this.props.companies.length ? "" : "NO DATA";
    return (
      <div className="CompaniesList">
        {this.renderCompanies()}
        {empty}
      </div>
    );
  }
}

export default CompaniesListView;
