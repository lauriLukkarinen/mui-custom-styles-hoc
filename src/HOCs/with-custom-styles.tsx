import React from 'react';
import { CustomStyles } from "../types";

/**
 * Interface describing custom styles props
 */
interface InjectedProps {
  customStyles?: CustomStyles;
}

/**
 * Interface describing HOC props
 */
interface HOCProps {
  customStylePath: string;
}

/**
 * Interface HOC state
 */
interface HOCState {
  customStyles?: CustomStyles;
}

/**
 * Functional HOC for adding custom styles
 * 
 * @param Component React component to enhance
 */
export const withCustomStyles = <P extends InjectedProps>(Component: React.ComponentType<P & InjectedProps>) =>
  class WithCustomStyles extends React.Component<P & HOCProps, HOCState> {
    /**
     * Component state
     */
    state: HOCState = {};

    /**
     * Component did mount life cycle method
     */
    public async componentDidMount() {
      const { customStylePath } = this.props;
      const customStyles = await import(`../../dynamic-resources/styles/${customStylePath}`);
      if (customStyles) {
        this.setState({ customStyles: customStyles.default });
      }
    }

    /**
     * Component render method
     */
    public render() {
      return (
        <Component
          { ...this.props as P }
          customStyles={ this.state.customStyles }
        />
      );
    }
  }