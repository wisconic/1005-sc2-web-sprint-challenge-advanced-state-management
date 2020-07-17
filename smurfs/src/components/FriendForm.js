import React, { useContext } from "react";
import { FormContext } from "../contexts/FormContext";
import { Formik, Field, Form } from "formik";
import { TextField, Button } from "@material-ui/core";

export default function SmurfForm() {
  const { postSmurf } = useContext(FormContext);

  return (
    <Formik
      initialValues={{
        name: "",
        age: "",
        height: "",
      }}
      onSubmit={(newSmurf, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        postSmurf(newSmurf);
        setSubmitting(false);
        resetForm();
      }}
    >
      {({ values, isSubmitting, resetForm }) => (
        <Form className='container'>
          <h2>Add a friend to the Smurf Village</h2>
          <div>
            <Field name='name' placeholder='name' type='input' as={TextField} />
          </div>
          <div>
            <Field name='age' placeholder='age' type='input' as={TextField} />
          </div>
          <div>
            <Field
              name='height'
              placeholder='height'
              type='input'
              as={TextField}
            />
          </div>
          <div>
            <Button type='submit' disabled={isSubmitting} variant='outlined'>
              submit
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
