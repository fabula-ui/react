import React, { useState } from "react"
import { Helmet } from 'react-helmet';

// Fabula related
import { FabulaProvider, ThemeProvider } from '@fabula/react-dev';

// Examples
import AvatarExample from '../Examples/avatar';
import ButtonExample from '../Examples/button';
import ButtonGroupExample from '../Examples/buttonGroup';
import ToastExample from '../Examples/toast';

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <style type="text/css">{`body, html { font-size: 15px; }`}</style>
      </Helmet>
      <FabulaProvider settings={{ toasts: true }}>
        <ThemeProvider>
          <AvatarExample />
          <ButtonExample />
          <ButtonGroupExample />
          <ToastExample />
        </ThemeProvider>
      </FabulaProvider>
    </>
  )
}

export default IndexPage
