import React from "react";
import Card from "react-bootstrap/esm/Card";
import ContentLayout from "../components/ContentLayout/ContentLayout";
import CreateForm from "../components/CreateForm/CreateForm";

export const CreateCard = () => {
  return (
    <ContentLayout>
      <div className="row">
        <Card className="col-lg-4 mx-auto">
          <Card.Body>
            <h3 className="mb-4 text-primary">Create new player</h3>
            <CreateForm />
          </Card.Body>
        </Card>
      </div>
    </ContentLayout>
  );
};
