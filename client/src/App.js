// import link and route
import axios from 'axios';
import { baseURL, config } from './services';
import { Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Footer from './components/Footer';
import Home from './components/Home';
import HowTo from './components/HowTo';
import Nav from './components/Nav';
import Play from './components/Play';
import Results from './components/Results';
import './App.css';


function App() {
  const [questions, setQuestions] = useState([]);
  const [comments, setComments] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);

  // get data for questions and comments
  useEffect(() => {
    const fetchQuestions = async () => {
      const resp = await axios.get(`${baseURL}/questions`, config)
      console.log(resp.data.records);
      setQuestions(resp.data.records);
    }
    fetchQuestions();
    const fetchComments = async () => {
      const resp = await axios.get(`${baseURL}/comments`, config)
      console.log(resp.data.records);
      setComments(resp.data.records);
    }
    fetchComments();
  }, []);


  return (
    <div className="App">
      <Nav />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/how">
        <HowTo />
      </Route>

      <Route path="/results">
        <Results />
      </Route>

      <Route path="/play">
        <Play />
      </Route>

      <Footer />
    </div>
  );
}

export default App;
