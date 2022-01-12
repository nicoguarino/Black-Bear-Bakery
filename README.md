# Black-Break-Bakery

## Table of Contents

- [About](#about)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Code Sample](#code-sample)
- [Acknowledgement](#acknowledgement)
- [Contributing](#contributing)
- [License](#license)

## About <a name = "about"></a>

Black Bear Bakery is an ecommerce website designed around a bakery. It utilizes a NoSQL database using Mongo, GraphQL, and Apollo-express as a database. The front end it build with React and React-Bootstrap framework. The application is a PWA and does contain offline funcitonality designed for the store page, so if anything is added to the cart while there is a loss in connection. The data will be saved until connection is made again. Stripe is used for payment method and EmailJS is used for contact page.

## Getting Started <a name = "getting-started"></a>

* [Git Hub Pull](https://github.com/nicoguarino/Black-Bear-Bakery.git)
* [Deployed Website](https://black-bear-bakery.herokuapp.com/)

## Installation <a name = "installation"></a>

No installation needed 

## Code Sample <a name = "code-sample"></a>

![Sample Code](https://github.com/nicoguarino/Black-Bear-Bakery/blob/main/client/public/images/sample_code.PNG?raw=true "Sample Code")

### Sample Code
```JavaScript Sample
// set up pre-save middleware to create password
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
```
```CSS Sample
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}


.product-img {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  height: 500px;
  border-radius: 20px;
  box-shadow: 5px 5px 5px #aaa;
}
```
```JSX
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
```

## Authors and acknowledgement <a name = "acknowledgement"></a>

Nico (Filipu) Guarino
Jaron Kenyon
Kristin Foreyt


## Contributing <a name = "contributing"></a>

Black Bear Backery is looking for contributions, however check with the owner of the website for further details by reaching on their contact information provided on the deployed website. The creator is opening to creative ideas and tweeking of design, but it must be approved first.

## License <a name = "license">

(c) 2021 Black Bear Bakery