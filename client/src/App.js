import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup'; 
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { StoreProvider } from './utils/GlobalState';


const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
      <div>
        <StoreProvider>
          <Navigation />
          <Switch>
          <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            {/* <Route exact path="/orderHistory" element={OrderHistory} />
            <Route exact path="/products/:id" element={Detail} /> */}
            {/* <Route element={NoMatch} /> */}
          </Switch>
          <Footer/>
        </StoreProvider>
      </div>
    </Router>
  </ApolloProvider>
  );
}

export default App;
