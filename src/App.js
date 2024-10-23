import logo from './logo.svg';
import './App.css';
import Menu from './components/01_component/Menu';
import Comment from './components/03_classComponent/Comment';
import CommentList from './components/03_classComponent/CommentList';
import UseStateTest from './components/04_hook/useState/UseStateTest';
import SignUp from './components/04_hook/useState/SignUp';
import ToolBar from './components/04_hook/useState/ToolBar';
import LandingPage from './components/04_hook/useState/LandingPage';
import UseEffectTest from './components/04_hook/useEffect/UseEffectTest';
import { useState } from 'react';
import UseRefTmp from './components/04_hook/useRef/UseRefTmp';
import UseRefScroll from './components/04_hook/useRef/UseRefScroll';
import MainContent from './components/04_hook/useContext/MainContent';
import UseMemoTest from './components/04_hook/useMemo/UseMemoTest';

function App() {
  const [isComponent, setIsComponent] = useState(true)
  return (
    <div className="App">
      {/* <Menu /> */}
      {/* <Comment/> */}
      {/* <CommentList /> */}
      {/* <Comment /> */}
      {/* <CommentList /> */}
      {/* <UseStateTest /> */}
      {/* <SignUp /> */}
      {/* <ToolBar /> */}
      {/* <LandingPage /> */}
      {/* { isComponent ? <UseEffectTest /> : <span>사라짐</span>}
      {
        setTimeout(() => {
          setIsComponent(false)
        }, 3000)
      } */}

      {/* <UseRefTmp /> */}
      {/* <UseRefScroll /> */}

      {/* <MainContent/> */}
      {/* <UseMemoTest/> */}
    </div>
  );
}

export default App;
