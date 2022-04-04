import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {Routes, Route} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';

const HatsPage = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Hats Page</h1>
    </div>
  )
}

const TopicList = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Topics Page</h1>
    </div>
  )
}

const TopicDetail = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Details Page</h1>
    </div>
  )
}

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path='/hats' element={ <HatsPage /> } />
        <Route path='/topics' element={ <TopicList /> } />
        <Route path='/topics/:topicId' element={ <TopicDetail /> } />
        <Route path='/shop' element={ <ShopPage /> } />
      </Routes>
    </div>
  );
}

export default App;
