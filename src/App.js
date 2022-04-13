import './App.css';
import React from 'react'
import HomePage from './pages/homepage/homepage.component';
import {Routes, Route} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path='/signin' element={ <SignInAndSignUp /> } />
        <Route path='/shop' element={ <ShopPage /> } />
      </Routes>
    </div>
  );
}

export default App;
