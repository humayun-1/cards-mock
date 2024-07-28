import React from "react";
import Form from "react-bootstrap/esm/Form";
import { IFormErrorProps } from "../CreateForm/CreateForm.types";

/**
 * Shows an Error message when there's an error coming from form validation
 * @param param0 Error object from validation
 * @returns
 */
const ErrorMessage: React.FC<IFormErrorProps> = ({ error }) => {
  return error ? (
    <Form.Text className="text-danger">{error.message}</Form.Text>
  ) : null;
};

export default ErrorMessage;
