import React from 'react';
import './App.css';
import ptBR from 'antd/lib/locale-provider/pt_BR'
import {LocaleProvider} from 'antd'

import RequestPokemon from './components/RequestPokemon/RequestPokemon'

function App() {
  return (
    <LocaleProvider locale = {ptBR}>
        <RequestPokemon/>
    </LocaleProvider>
  );
}

export default App;
