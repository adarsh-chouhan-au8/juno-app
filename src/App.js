// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import AllRoutes from './AllRoutes';
import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
   <Router>
    <ScrollToTop/>
    <AllRoutes />
    </Router>
  );
}

export default App;
