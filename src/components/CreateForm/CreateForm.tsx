import React from "react";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/esm/Form";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { addCard } from "../../lib/collection";
import ErrorMessage from "../FormErrorMessage/FormErrorMessage";
import { CreateCardForm, datePattern, ERR } from "./CreateForm.types";

/**
 * Form component.
 * Uses validation, required and ensures proper date format
 *
 */
const CreateForm: React.FC<any> = () => {
  const history = useHistory();
  const {
    register,
    formState: { isValid, errors },
    handleSubmit,
  } = useForm<CreateCardForm>({
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const addUser = (data: any) => {
    const parsedData = {
      ...data,
      birthday: new Date(data.birthday).toISOString(),
    };
    const playerData = {
      player: parsedData,
    };

    addCard(playerData).then((x) => {
      history.push("/collection");
    });
  };

  return (
    <Form onSubmit={handleSubmit(addUser)} autoComplete="off">
      <Form.Group>
        <Form.Label>First name</Form.Label>
        <Form.Control
          type="firstname"
          required
          {...register("firstname", {
            required: ERR.required,
          })}
        />
        <ErrorMessage error={errors?.firstname} />
      </Form.Group>

      <Form.Group>
        <Form.Label>Last name</Form.Label>
        <Form.Control
          type="lastname"
          required
          {...register("lastname", {
            required: ERR.required,
          })}
        />
        <ErrorMessage error={errors?.lastname} />
      </Form.Group>

      <Form.Group>
        <Form.Label>Birthday</Form.Label>
        {/* We can also use the input type "date" here. I chose to use the input type "text" to facilitate the pattern validation. */}
        <Form.Control
          type="text"
          required
          placeholder="mm-dd-yyyy"
          {...register("birthday", {
            required: ERR.required,
            pattern: { value: datePattern, message: ERR.date },
          })}
        />
        <ErrorMessage error={errors?.birthday} />
      </Form.Group>

      <Button
        className="mt-4"
        block
        variant="primary"
        disabled={!isValid}
        type="submit"
      >
        Create
      </Button>
    </Form>
  );
};

export default CreateForm;
