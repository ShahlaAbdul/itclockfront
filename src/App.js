import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from './Layout/MainLayout';
import Home from './Pages/Home/Home';
import AddPage from './Pages/AddPage/AddPage';

function App() {
  return (
    <BrowserRouter >
    <Routes>
      <Route element={<MainLayout></MainLayout>}>
      <Route path="/" element={<Home></Home>}/> 
      <Route path='/add' element={<AddPage></AddPage>}/>
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
