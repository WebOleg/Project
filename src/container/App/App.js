import React, { useState } from 'react'
import Header from '../Header/Header'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import Main from 'container/Main/Main'

const App = () => {
    const [cartData, setCartData] = useState({ totalCount: 0, totalPrice: 0 })
    return (
        <>
            <StyledEngineProvider injectFirst>
                <CssBaseline />
                <Header cartData={cartData} />
                <Main />
            </StyledEngineProvider>
        </>
    )
}

export default App
