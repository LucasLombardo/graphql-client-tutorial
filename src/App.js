import React, { Component } from 'react';
import logo from './logo.svg';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './App.css';
import Post from './posts/Post';
import Posts from './posts/Posts';

const client = new ApolloClient({
  uri: 'https://api-useast.graphcms.com/v1/cjodg7al773m301g5mse7qxc3/master'
})

// Running a query outside of react, generally will not be done this way
// client.query({
//   query: testQuery
// }).then(res => console.log(res));

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />

            </header>
            <Switch>
              <Route exact path="/" component={Posts} />
              <Route path="/post/:id" component={Post} />
            </Switch>
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
