
import React from 'react';
import Iphone14 from './components/common/Iphone14';
import View1 from './components/view1/View1';
import View2 from './components/view2/View2';
import View3 from './components/view3/View3';
import './App.css';
import './components/view1/View1.css'
import { informaciones } from './assets/principalApi';
const App = () => {
  return (
    <div className="app">
      <Iphone14>
        <View1 informaciones ={informaciones}/>
        
      </Iphone14>

      <Iphone14>
        <View2 />
      </Iphone14>

      <Iphone14>
        <View3 />
      </Iphone14>
    </div>
  );
};

export default App;
