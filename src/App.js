import logo from './logo.svg';
import './App.css';
import Food from './components/01_component/Food';
import Menu from './components/01_component/Menu';
import Comment from './components/02_props/Comment';
import CommentList from './components/02_props/CommentList';

function App() {
  return (
    <div className="App">
      {/* <Menu />*/}
      {/* <Comment />*/}
      <CommentList />
    </div>
  );
}

export default App;
