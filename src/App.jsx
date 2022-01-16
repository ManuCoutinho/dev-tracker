import {ContainerWrapper} from './components/Searcher';
import ErrorBoundary from './ErrorBoundary';
import {ErrorBoundary as ErrorContainer} from './components/Searcher/ErrorBoundary';
import { GlobalStyle } from './styles/global';

export function App() {
  return (  
    <ErrorBoundary>
      <ErrorContainer>
        <ContainerWrapper/>
      </ErrorContainer>
      <GlobalStyle/>     
    </ErrorBoundary>    
  );
}