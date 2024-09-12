import './App.css'
import {useState} from 'react';
import Person from './components/Person/Person.tsx';

interface IPerson {
    number: number;
}

const App = () => {

  const [people, setPeople] = useState<IPerson[]>([
      {number: 5},
      {number: 11},
      {number: 16},
      {number: 23},
      {number: 32},
  ]);


  const changeNumbers = () => {
    console.log('Click the button');
    setPeople([
        {number: 29},
        {number: 34},
        {number: 10},
        {number: 18},
        {number: 26},
    ]);
  };

  return (
    <>
        <Person number={people[0].number}/>
        <Person number={people[1].number}/>
        <Person number={people[2].number}/>
        <Person number={people[3].number}/>
        <Person number={people[4].number}/>

        <button onClick={changeNumbers} type="button">Change numbers</button>
    </>
  )
}

export default App
