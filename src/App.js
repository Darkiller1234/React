import logo from './logo.svg';
import './App.css';
import Menu from './components/01_component/Menu';
import Comment from './components/03_classComponent/Comment';
import CommentList from './components/03_classComponent/CommentList';
import UseStateTest from './components/04_hook/useState/UseStateTest';
import SignUp from './components/04_hook/useState/SignUp'

function App() {
  return (
    <div className="App">
      {/* <Menu /> */}
      {/* <Comment/> */}
      {/* <CommentList /> */}
      {/* <Comment /> */}
      {/* <CommentList /> */}
      {/* <UseStateTest /> */}
      <SignUp />
    </div>
  );
}

export default App;
