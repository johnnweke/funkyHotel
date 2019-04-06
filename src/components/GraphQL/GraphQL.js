import React, { Component } from 'react';

class GraphQL extends Component {
  componentDidMount() {
    const url = 'http://localhost:7001/graphql/';
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `query {
          room {
            _id
            price
            number
            name
          }
        } `
      })
    })
      .then(res => {
        console.log('res', res);
        return res.json();
      })
      .then(res => console.log('res2', res));
  }

  render() {
    return (
      <div>
        <h1>GraphQL Playground</h1>
      </div>
    );
  }
}
export default GraphQL;
