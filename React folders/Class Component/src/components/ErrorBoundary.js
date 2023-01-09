import { Component } from 'react';

class ErrorBondary extends Component {
  constructor() {
    super();
    this.state = {
      error: false,
    };
  }

  componentDidCatch(err) {
    console.log(err);
    this.setState({ error: true });
  }

  render() {
    if (this.state.error) {
      return <p>Something went wrong!</p>;
    }
    return this.props.children;
  }
}

export default ErrorBondary;
