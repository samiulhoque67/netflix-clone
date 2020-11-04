import React,{useEffect} from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav' ;
import { auth } from "./firebase";
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import { useStateValue } from "./StateProvider";
import Login from './Login';

function App() {

  const [ {}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <BrowserRouter>
    <div className="app">
      <Switch>


      <ProtectedRoute exact path='/'>
      <Nav/>
      <Banner/>
     <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}
     isLarge
     /> 
     
     <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
     <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
     <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
     <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
     <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
     <Row title="Romance Movies" fetchUrl={requests.fetchRomanticMovies}/>
     <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
</ProtectedRoute>
<Route exact path='/login'>

  <Login/>
</Route>
</Switch>
    </div>
    </BrowserRouter>

  );
}

export default App;
