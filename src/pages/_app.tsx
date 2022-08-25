/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import type { ReactNode } from 'react'

const BaseDesktopLayout = dynamic(() => import('./app-portal-cr'))
const BaseMobileLayout = dynamic(() => import('./app-mobile-cr'))

type NextPageWithLayout = NextPage & {
    getMobileLayout?: (page: ReactNode, isMobile: boolean) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    const { isMobile } = pageProps
    const getMobileLayout = Component.getMobileLayout ?? ((page) => page)

    if (isMobile) {
        return getMobileLayout(BaseMobileLayout, pageProps)
    }

    return (
        <BaseDesktopLayout>
            <Component {...pageProps} />
        </BaseDesktopLayout>
    )
}

export default MyApp
