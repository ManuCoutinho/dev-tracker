import React from "react";

export class ErrorBoundary extends React.Component {
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
      errorMessage: "Algo deu errado!"
    };
  }
  componentDidCatch(error, errorInfo) {
   console.log(error, errorInfo);
  }
  render() {
    if (this.state.hasError) {      
      return  <div>{this.state.errorMessage}</div>
    }
    return this.props.children;
  }
}