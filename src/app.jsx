import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Form from './components/Form/Form';
import Spent from './components/Form/Spent';
import PrimerComponente from './components/PrimerComponente';
import SegundoComponente from './components/SegundoComponente';
import Toggle from './components/Toggle/Toggle';

function App() {

  const [spentList, setSpentList] = useState([]);
  
  const addSpentToList = (newSearch) => {
    setSpentList([...spentList, newSearch ]);
  }
  return (
    <div>
      <PrimerComponente name = "Alejandro" lastName = "Iglesias"/>
      <SegundoComponente/>
      <Button/>
      <Toggle/>
      <Form addSpentToList={addSpentToList}/>
      {/* la funcion de debajo es para recorrer mi lista de deudas, e imprimirlas por pantalla, tipo app de abanca */}
      {spentList.map(spentItem => <Spent spentt={spentItem}  />)}
    </div>
   
   
  );
}

export default App;
