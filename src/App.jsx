import { pastel } from './assets/PastelesAPI';
import React from 'react';
import Iphone14 from './components/common/Iphone14';
import View1 from './components/view1/View1';
import View2 from './components/view2/View2';
import View3 from './components/view3/View3';
import { names } from './assets/ofertaAPI';
import { informaciones } from './assets/principalApi';
import './App.css';
import './components/view1/Destacados.css';

const App = () => {
  return (
    <div className="app">
      <Iphone14>
        <View1 names={names} informaciones={informaciones} />
      </Iphone14>

      <Iphone14>  
        <div>
          {pastel.map(past => (
            <View2 key={past.id} pastel={past} />
          ))}
        </div>
      </Iphone14>

      <Iphone14>
        <View3 />
      </Iphone14>
    </div>
  );
};

export default App;
