import '../styles/globals.css'
import type { AppProps } from 'next/app'
 import { UserProvider } from "../types/UserContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
     <UserProvider users={pageProps.users}>
  <Component {...pageProps} />
   </UserProvider>
  )
}
