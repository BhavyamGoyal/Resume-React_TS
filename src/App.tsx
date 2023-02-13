import React from 'react';
import './App.css';
import ReactDOMServer from "react-dom/server";
import Format1 from './Components/Format1/Format1';

function App() {
  const html = ReactDOMServer.renderToStaticMarkup(<Format1 />);
  return (
    <div>
      <Format1 />
    </div>
  );
}

export default App;
