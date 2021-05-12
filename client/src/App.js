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
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  const [linkedQuestions, setLinkedQuestions] = useState([]);
  const [comments, setComments] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);

  // get data for questions and comments
  useEffect(() => {
    const fetchQuestionsAndComments = async () => {
      const questionsResp = await axios.get(questionsBaseURL, config)
      const commentResp = await axios.get(commentsBaseURL, config)
      const retrievedComments = commentResp.data.records;
      const retrievedQuestions = questionsResp.data.records.map((question) => {
        return {
          ...question,
          fields: {
            ...question.fields,
            comments: question.fields.comments ? retrievedComments.filter((comment) => question.fields.comments.includes(comment.id)) : []
          }
        }
      })
      setComments(commentResp.data.records);
      setLinkedQuestions(retrievedQuestions)
    }
    fetchQuestionsAndComments();
  }, [toggleFetch]);

  // console.log(questions);
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
        <Results questions={linkedQuestions} comments={comments} setToggleFetch={setToggleFetch} />
      </Route>

      <Route path="/play">
        {/* pass props of questions */}
        <Play questions={linkedQuestions} setToggleFetch={setToggleFetch}/>
      </Route>

      <Footer />
    </div>
  );
}

export default App;
