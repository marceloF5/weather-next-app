import Head from 'next/head'
import { LayersManager } from 'react-layers-manager'

import { Container } from 'components/base'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

type TDefaultLayoutProps = {
    children: React.ReactNode
}

const DefaultLayout = ({ children }: TDefaultLayoutProps) => {
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <LayersManager>
                <ThemeProvider theme={theme}>
                    <GlobalStyles />
                    <Container>{children}</Container>
                </ThemeProvider>
            </LayersManager>
        </>
    )
}

export default DefaultLayout
