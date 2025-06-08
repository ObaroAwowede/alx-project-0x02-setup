import { AppProps } from 'next/app';  
import Header from '../components/layout/Header'; 

export default function App({ Component, pageProps }: AppProps) { 
  return (
    <div>
      <Component {...pageProps} /> 
    </div>
  );
}