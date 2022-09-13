import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Card from './Components/shared/Card';
import Header from './Components/Header';
import FeedbackList from './Components/FeedbackList';
import FeedbackData from './data/FeedbackData';
import FeedbackStats from './Components/FeedbackStats';
import FeedbackForm from './Components/FeedbackForm';
import AboutPage from './pages/AboutPage';
import AboutIconLink from './Components/AboutIconLink';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

  const AddFeedback =(newFeedback)=> {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }


  const deleteFeedback =(id)=>{
    if(window.confirm('Are You Sure You Want to Delete? ')) {
      setFeedback(feedback.filter((item)=> item.id !== id))
    }
  }
// add npm i uuid to be able to add an id to new feedback
  
  return (
    <Router>
      <Header />

      <div className="Container">
        <Routes>
          <Route exact path='/'
          element={
            <>
            <FeedbackForm handleAdd={AddFeedback}/>
            <FeedbackStats feedback={feedback}/>
            <FeedbackList feedback= {feedback} handleDelete={deleteFeedback}/>
            </>
          }>
            
          </Route>
          <Route path='/about' element={<AboutPage/>}/>
        </Routes>
        <Card>
          <NavLink to='/' activeclassname='active'>
            Home
          </NavLink>
          <NavLink to='/about' activeclassname='active'>
            About
          </NavLink>
        </Card>
        <AboutIconLink/>
      </div>
    </Router>
  );
}

export default App;
