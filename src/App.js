import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import TeamList from './components/TeamList';
import Form from './components/Form';


// Create function app
function App() {
  const [teamList, setTeamList] = useState([
    {
      id: 1,
      name: 'Daniel',
      email: 'daniel@nowhere.com',
      role: 'Full Stack Web Developer'

    }
  ]);

  return (
    <div className="App">
    <h1>My Super Sqaud List</h1>
    <TeamList team={teamList} />
    <Form />
    </div>
  );
}

export default App;
