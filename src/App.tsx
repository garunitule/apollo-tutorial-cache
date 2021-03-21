import {
  useQuery,
  useMutation,
  gql,
} from '@apollo/client';
import logo from './logo.svg';
import './App.css';

const GET_ALL_USERS = gql`
  query users {
    users {
      data {
        id,
        name
      }
    }
  }
`;

const CREATE_USER = gql`
  mutation createUser(
    $name: String!,
    $email: String!,
    $password: String!,
  ) {
    createUser(
      name: $name,
      email: $email,
      password: $password
    ) {
      id,
      name,
      email
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_ALL_USERS);

  const [createUser] = useMutation(CREATE_USER);

  if (loading) {
    console.log(loading);
    return <p>Loading...</p>;
  }

  if (error) {
    console.log(error);
    return <p>Error...</p>;
  }
  
  console.log(data);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <form
          onSubmit={e => {
            e.preventDefault();
            const testUserIndex = (loading || error) ? '1' : String(data.users.data.length+1);
            createUser({
              variables: {
                name: `test0${testUserIndex}`,
                email: `test0${testUserIndex}@test.com`,
                password: 'test1234',
              }
            })
          }}
        >
          <button type="submit">CreateTestUser</button>
        </form>
      </header>
    </div>
  );
}

export default App;
