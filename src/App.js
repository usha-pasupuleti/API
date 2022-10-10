import logo from './logo.svg';
import './App.css';
import Meal from './Component/Meal';
import MealItem from './Component/MealItem';
import Recipes from './Component/Recipes';
import {Routes,Route, BrowserRouter} from "react-router-dom";

function App() {
  return (
    <div>

      
      <BrowserRouter>

      <Routes>

            <Route path='/' element={<Meal />} />
          </Routes>

      </BrowserRouter>

      {/* <Meal /> */}

     
    
    </div>
  );
}

export default App;
