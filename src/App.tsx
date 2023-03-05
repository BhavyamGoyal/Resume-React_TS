import React from 'react';
import './App.css';
import ReactDOMServer from "react-dom/server";
// import Format1 from './Components/Format1/Format1';
import Format from './Format2/Format2';
function App() {
  // const html = ReactDOMServer.renderToStaticMarkup(<Format2 />);
  return (
    <div>
      <Format />
    </div>
  );
}

export default App;
