import React, { useState } from 'react'
import { Helmet } from 'react-helmet';

// Fabula related
import { FabulaProvider, ThemeProvider, UtilsProvider } from '@fabula/react-dev';

// Examples
import AvatarExample from '../Examples/avatar';
import ButtonExample from '../Examples/button';
import ButtonGroupExample from '../Examples/buttonGroup';
import FileInputExample from '../Examples/fileInput';
import IconExample from '../Examples/icon';
import ToastExample from '../Examples/toast';

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <link href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap' rel='stylesheet' />
        <style type='text/css'>{`body, html { font-size: 15px; }`}</style>
      </Helmet>
      <FabulaProvider settings={{ toasts: true }} utils={true}>
        <UtilsProvider>
          <ThemeProvider>
            <AvatarExample />
            <ButtonExample />
            <ButtonGroupExample />
            <FileInputExample />
            <IconExample />
            <ToastExample />
          </ThemeProvider>
        </UtilsProvider>
      </FabulaProvider>
    </>
  )
}

export default IndexPage
