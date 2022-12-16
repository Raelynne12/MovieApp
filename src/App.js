import Footer from './components/Footer';
import Header from './components/Header';
import List from './components/List';
import Detail from "./components/Detail"
import "./css/layout.css"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import ProfileDetail from './components/ProfileDetail';
import SearchResult from './components/SearchResult';
import NowPlaying from './components/NowPlaying';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
        <Routes>
          <Route path="/" element={<List></List>}></Route>
          <Route path="/detail/:id" element={<Detail></Detail>}></Route>
          <Route path="/profile/:id" element={<ProfileDetail></ProfileDetail>}></Route>
          <Route path="/search" element = {<SearchResult></SearchResult>}></Route>
          <Route path="/nowplay" element = {<NowPlaying></NowPlaying>}></Route>
          
        </Routes>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
