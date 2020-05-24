import React, { useState } from "react"
import { Helmet } from 'react-helmet';

// Fabula related
import { ThemeProvider } from '@fabula/react-dev';

// Examples
import AvatarExample from '../Examples/avatar';
import ButtonExample from '../Examples/button';
import ButtonGroupExample from '../Examples/buttonGroup';

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <style type="text/css">{`body, html { font-size: 15px; }`}</style>
      </Helmet>
      <ThemeProvider>
        <AvatarExample />
        <ButtonExample />
        <ButtonGroupExample />
      </ThemeProvider>
    </>
  )
}

export default IndexPage
