import React from 'react';
import { Helmet } from 'react-helmet';
import './App.css';

import {
  FileInput,
  Tag,
} from './lib';

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>Fabula UI</title>
        <link href="https://fonts.googleapis.com/css?family=Inter:400,600,700,900" rel="stylesheet" />
        <style>{`html { font-size: 15px; }`}</style>
      </Helmet>
      <div style={{ padding: 20 }}>
        <FileInput expand={true} multiple={true} />
        <Tag>
          <span>Tag</span>
        </Tag>
      </div>
    </>
  );
}

export default App;
