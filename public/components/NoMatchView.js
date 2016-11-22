import React, { Component } from 'react';

const NoMatchView = props => {
  return <div className="not-found">
    <h1>404 Not Found</h1>
    <p>The page you requested does not exist...</p>
  </div>
}

export default NoMatchView;
