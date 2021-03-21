import React from 'react';
import ReactDOM from 'react-dom';
import {
  ApolloClient,
  InMemoryCache,
} from '@apollo/client';
import { gql } from '@apollo/client';
import './index.css';
import App from './App';

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql',
  cache: new InMemoryCache(),
});

client
  .query({
    query: gql`
      query user{
        user(id: 2) {
          id,
          name,
          posts {
            id,
            user_id,
            title,
            comments {
              id,
              post_id,
              reply,
            }
          }
        }
      }
    `
  })
  .then(result => console.log(result));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
