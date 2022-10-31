import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import LeftSide from './components/LeftSide';
import Main from './components/Main';
import RightSide from './components/RightSide';
import { useEffect } from "react";
import {useSelector,useDispatch} from 'react-redux'
import {getAllNames} from './redux/Action/index'

function App() {
  const dispatch = useDispatch()
  const list=useSelector(state=>state.nameList.names)
  useEffect(() => {
   dispatch(getAllNames())
  }, [dispatch]);
 console.log(list)

  return (
    <div >
      <div className="container">
        <div className="row">
          <div className="col text-center">
          <Header list={list} />
          </div>
        </div>
       <div className="row">
       <div className="col-4">
          <LeftSide  list={list}/>
        </div>
        <div className="col-4">
          <Main list={list} />
        </div>
        <div className="col-4 ">
         <RightSide list={list}/>
        </div>
       </div>

       <div className="row">
        <div className="col text-center">
          <Footer list={list}/>
        </div>
       </div>
      </div>
    </div>
  );
}

export default App;
