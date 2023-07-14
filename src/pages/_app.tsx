import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { MantineProvider } from '@mantine/core'
import { AutenticacaoProvider } from '@/data/contexts/AutenticacaoContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={{ colorScheme: 'dark'}}>
      <AutenticacaoProvider>
      <Component {...pageProps} />
      </AutenticacaoProvider>
    </MantineProvider>
  )
}
