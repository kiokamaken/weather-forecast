import React, { ErrorInfo } from 'react';

export default class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError(error: ErrorInfo) {
    return { hasError: !!error };
  }

  render() {
    // if (this.state.hasError) {
    //   // You can render any custom fallback UI
    //   return <h1>Something went wrong.</h1>;
    // }

    return React.Children.only(this.props.children);
  }
}
