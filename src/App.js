
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';

import Card from './Components/shared/Card';
import Header from './Components/Header';
import FeedbackList from './Components/FeedbackList';
import { FeedbackProvider } from './Context/FeedbackContext';
import FeedbackStats from './Components/FeedbackStats';
import FeedbackForm from './Components/FeedbackForm';
import AboutPage from './pages/AboutPage';
import AboutIconLink from './Components/AboutIconLink';

function App() {
 
// add npm i uuid to be able to add an id to new feedback
  
  return (
    <FeedbackProvider>
    <Router>
      <Header />

      <div className="Container">
        <Routes>
          <Route exact path='/'
          element={
            <>
            <FeedbackForm />
            <FeedbackStats />
            <FeedbackList />
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
    </FeedbackProvider>
  );
}

export default App;
