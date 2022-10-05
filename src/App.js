import './App.css';
import StartScreen from './components/StartScreen/StartScreen';
import TeamCreator from './components/TeamCreator/TeamCreator';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import TruthOrDrink from './components/TruthOrDrink/TruthOrDrink';
import { getAll, createNew } from './services/taskService'
import { useEffect, useState } from 'react';
import AddingPage from './components/AddingPage/AddingPage';

function App() {
  const [tasks, setTasks] = useState([])


  const setData = async () => {
    const data = await getAll()
    setTasks(data)
  }


  useEffect(()=> {setData()}, [])



  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<StartScreen />} />
          <Route path="/team" element={<TeamCreator />} />
          <Route path="/game1" element={<TruthOrDrink tasks={tasks}/>} />
          <Route path="/addingHeHe" element={<AddingPage create={createNew}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
