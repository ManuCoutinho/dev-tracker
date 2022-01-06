import React from "react";

class ErrorBoundary extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     hasError: false,
    errorMessage: '',
  };
 }

  static getDerivedStateFromError(error) {    
    return { 
      hasError: true,
      errorMessage: error.message
    };
  }
  componentDidCatch(error, errorInfo) {
   console.log(error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      // Você pode renderizar qualquer UI alternativa
      return <p>Houve um erro: {this.state.errorMessage}</p>
    }
    return this.props.children;
  }
}
export default ErrorBoundary;