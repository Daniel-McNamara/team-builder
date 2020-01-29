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

  const addNewTeamMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };
    setTeamList([...teamList, newMember]);
  }
  return (
    <div className="App">
    <h1>My Super Sqaud List</h1>
    <TeamList team={teamList} />
    <Form addNewMember={addNewTeamMember} />
    </div>
  );
}

export default App;
