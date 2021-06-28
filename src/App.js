import logo from './logo.svg';
import './App.css';
import SignUp from './pages/sign_Up/signUp';
import{ BrowserRouter as Router,Switch,Route} from 'react-router-dom'  
import Login from './pages/login/login';
import ResetPassword from './pages/ResetPassword/resetPassword';
import DashBoard from './pages/Dashboard/dashboard';
import  NotesCard  from './pages/NotesCard/notesCard';
import ForgotPwd from './pages/ForgotPassword/forgotPwd';
import drawer from './pages/menuDrawer/drawer'
import Allnotes from './pages/DisplayNotes/displayNotes'
import hooks from './pages/DisplayNotes/hooks'
import TemporaryDrawer from './pages/menuDrawer/drawer2'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={SignUp}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/signUp" component={SignUp}/>
          <Route exact path="/resetPassword/:token" component={ResetPassword}/>
          <Route exact path="/dashboard" component={DashBoard}/>
          <Route exact path="/notesCard" component={NotesCard}/>
          <Route exact path="/forgotPwd" component={ForgotPwd}/>
          <Route exact path="/drawer" component={drawer}/>
          <Route excat path="/allnotes" component={Allnotes}/>
          <Route exact path="/hooks" component={hooks}/>
          <Route exact path="/dra" component={TemporaryDrawer}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
