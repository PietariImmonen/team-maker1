import './App.css';
import StartScreen from './components/StartScreen/StartScreen';
import TeamCreator from './components/TeamCreator/TeamCreator';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import TruthOrDrink from './components/TruthOrDrink/TruthOrDrink';
import { getAll } from './services/taskService'
import { useEffect, useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([{task: 'Ready to start?', drink: 'Click the button you want to select!'}])


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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
