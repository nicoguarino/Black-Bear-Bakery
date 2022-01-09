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
import Success from './pages/Success';
import Contact from './pages/Contact';
import NoMatch from './pages/NoMatch';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Store from './pages/Store';
import Detail from './pages/Detail';
import OrderHistory from './pages/Order-History';
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
          <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login}/>
            <Route exact path="/signup" component={Signup}/>
            <Route exact path="/success" component={Success} />
            <Route exact path="/store" component={Store} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/orderHistory" component={OrderHistory} />
            <Route exact path="/products/:id" component={Detail} />
            <Route component={NoMatch} />
          </Switch>
          <Footer/>
        </StoreProvider>
      </div>
    </Router>
  </ApolloProvider>
  );
}

export default App;
