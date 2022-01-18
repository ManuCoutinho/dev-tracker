import usePersistedState from './utils/usePersistedState';
import ErrorBoundary from './ErrorBoundary';
import {ErrorBoundary as ErrorContainer} from './components/Searcher/ErrorBoundary';
import { ThemeProvider } from 'styled-components';
import { Header } from '../src/components/Header';
import {ContainerWrapper} from './components/Searcher';


import { GlobalStyle } from './styles/global';
import  { light } from './styles/theme/light';
import { dark } from './styles/theme/dark';

export function App() {
const [theme, setTheme] = usePersistedState('theme', dark);

 const toggleTheme = () => {
  setTheme(theme.title === 'dark' ? light : dark);
};

  return ( 
    <ThemeProvider theme={theme}>
      <ErrorBoundary>
        <ErrorContainer>  
          <GlobalStyle/>     
          <Header toggleTheme={toggleTheme} />        
          <ContainerWrapper/>
        </ErrorContainer>
      </ErrorBoundary>       
    </ThemeProvider>    
  );
}