import {
  useQuery,
  gql,
} from '@apollo/client';
import logo from './logo.svg';
import './App.css';

const GET_USER_POST_COMMENT = gql`
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
`;

function App() {
  const { loading, error, data } = useQuery(GET_USER_POST_COMMENT);
  console.log(data);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error...</p>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
