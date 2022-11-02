import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import LeftSide from './components/LeftSide';
import Main from './components/Main';
import RightSide from './components/RightSide';
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { getAllNames } from './redux/Action/index'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllNames())
  }, [dispatch]);


  return (
    <div >
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <Header />
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <LeftSide />
          </div>
          <div className="col-4">
            <Main />
          </div>
          <div className="col-4 ">
            <RightSide />
          </div>
        </div>

        <div className="row">
          <div className="col text-center">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
