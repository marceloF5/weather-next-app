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
        <LayersManager>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <Container>{children}</Container>
            </ThemeProvider>
        </LayersManager>
    )
}

export default DefaultLayout
