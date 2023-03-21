import { useState } from 'react';

//import image
import logo from './component/images/logo.svg';

//Component
import Display from './component/Display'
import Form from './component/Form';

//styles
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="wrapper">
      <img src={logo} alt="Splitter logo"></img>
      <div className="container">
        <Form/>
       <Display/>
      </div>
    </div>
  );
}

export default App;
