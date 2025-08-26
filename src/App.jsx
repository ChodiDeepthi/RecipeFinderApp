import { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home.jsx';
import Search from './Components/Search.jsx';
import ResultItem from './Components/ResultItem.jsx';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/item/:name" element={<ResultItem />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
