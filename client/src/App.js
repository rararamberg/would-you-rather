import axios from 'axios';
import { questionsBaseURL, commentsBaseURL, config } from './services';
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
      const resp = await axios.get(questionsBaseURL, config)
      // console.log(resp.data.records);
      setQuestions(resp.data.records);
    }
    fetchQuestions();
    const fetchComments = async () => {
      const resp = await axios.get(commentsBaseURL, config)
      // console.log(resp.data.records);
      setComments(resp.data.records);
    }
    fetchComments();
  }, [toggleFetch]);

  console.log(questions);
  // console.log(comments);

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
        {/* pass props of questions and comments */}
        <Results questions={questions} comments={comments} setToggleFetch={setToggleFetch} />
      </Route>

      <Route path="/play">
        {/* pass props of questions */}
        <Play questions={questions} setToggleFetch={setToggleFetch}/>
      </Route>

      <Footer />
    </div>
  );
}

export default App;
