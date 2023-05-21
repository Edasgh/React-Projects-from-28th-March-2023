// npm install react react-dom react-router-dom appwrite
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Appwrite from 'appwrite';
import Home from './components/Home';
import Listings from './components/Listings';
import CreateListing from './components/CreateListing';
import ListingDetails from './components/ListingDetails';

// Initialize Appwrite
const appwrite = new Appwrite();

appwrite
  .setEndpoint('YOUR_APPWRITE_ENDPOINT')
  .setProject('YOUR_APPWRITE_PROJECT_ID');

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/listings" render={(props) => <Listings appwrite={appwrite} {...props} />} />
        <Route exact path="/listings/create" render={(props) => <CreateListing appwrite={appwrite} {...props} />} />
        <Route exact path="/listings/:id" render={(props) => <ListingDetails appwrite={appwrite} {...props} />} />
      </Switch>
    </Router>
  );
}

export default App;
