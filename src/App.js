import logo from './logo.svg';
import './App.css';
import SignUp from './pages/sign_Up/signUp';
import{ BrowserRouter as Router,Switch,Route} from 'react-router-dom'  
import Login from './pages/login/login';
import ResetPassword from './pages/ResetPassword/resetPassword';
import DashBoard from './pages/Dashboard/dashboard';
import  NotesCard  from './components/NotesCard/notesCard';
import ForgotPwd from './pages/ForgotPassword/forgotPwd';
// import drawer from './components/menuDrawer/drawer'
import Allnotes from './components/DisplayNotes/displayNotes'
import hooks from './components/DisplayNotes/hooks'
import TemporaryDrawer from './components/menuDrawer/drawer2'
import counter from './components/NotesCard/counter'
import A from './components/NotesCard/counterParent';
import B from './components/NotesCard/compB'
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
          {/* <Route exact path="/drawer" component={drawer}/> */}
          <Route excat path="/allnotes" component={Allnotes}/>
          <Route exact path="/hooks" component={hooks}/>
          <Route exact path="/dra" component={TemporaryDrawer}/>
          <Route exact path="/counter" component={counter}/>
          <Route exact path="/comp" component={A}/>
          <Route exact path="/comp" component={B}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
