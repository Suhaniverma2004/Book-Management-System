import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateBook from './pages/CreateBooks';
import ShowBook from './pages/ShowBook';
import EditBook from './pages/EditBook';
import DeleteBook from './pages/DeleteBook';
import StartPage from './pages/StartPage';
import ChooseView from './pages/ChooseView';
import NavBar from './components/NavBar';
const App = () => {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path='/' element={<StartPage />} />
      <Route path='/view' element={<ChooseView />} />
      <Route path='/card' element={<Home showType={"card"}/>} />
      <Route path='/table' element={<Home showType={"table"}/>} />
      <Route path='/books/create' element={<CreateBook />} />
      <Route path='/books/details/:id' element={<ShowBook />} />
      <Route path='/books/edit/:id' element={<EditBook />} />
      <Route path='/books/delete/:id' element={<DeleteBook />} />
    </Routes>
    </>
  );
};

export default App;
