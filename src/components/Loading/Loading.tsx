import React from "react";
import Spinner from "react-bootstrap/esm/Spinner";
import "./Loading.css";

export interface ILoadingProps {
  /**
   * Whether show or not the loader
   */
  show: boolean;
}

/**
 * Shows a spinner indicating a Loading state.
 */
export const Loading: React.FC<ILoadingProps> = (props) => {
  return (
    <>
      {props.show === true && (
        <div className="loading-wrapper">
          <Spinner animation="border" />
        </div>
      )}
    </>
  );
};
