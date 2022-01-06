import {ContainerWrapper} from '../src/components/ContainerWrapper';
import ErrorBoundary from './ErrorBoundary';
import {ErrorBoundary as ErrorContainer} from '../src/components/ContainerWrapper/ErrorBoundary';
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