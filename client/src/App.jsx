import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Home from './pages/Index/Home'
import News from './pages/News/News'
import Create from './pages/News/Create'
import Details from './pages/News/Details'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/news' element={<News />} />
          <Route path='/news/:id' element={<Details />} />
          <Route path='/news/create' element={<Create />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;