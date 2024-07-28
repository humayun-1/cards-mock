import React from "react";
import Button from "react-bootstrap/esm/Button";
import "./AddCta.css";
import { useHistory } from "react-router-dom";

/**
 * Default tile to Add new players
 */
const AddCta: React.FC<any> = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/create-card");
  };
  return (
    <div className="add-cta-wrapper col-md-6 col-lg-4 col-xl-3 mb-4">
      <Button className="d-flex mx-auto" onClick={() => handleClick()}>
        Add new
      </Button>
    </div>
  );
};

export default AddCta;
