import { Field, Form, Formik } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import s from "./ContactForm.module.css";
import { addContact } from "../../redux/contactsSlice";
import { useDispatch } from "react-redux";

export const ContactForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmitForm = (values, actions) => {
    const id = nanoid();
    const newContact = {
      ...values,
      id,
    };
    dispatch(addContact(newContact));
    actions.resetForm();
  };

  const addContactSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  return (
    <Formik
      validationSchema={addContactSchema}
      initialValues={initialValues}
      onSubmit={handleSubmitForm}
    >
      <Form className={s.contactFormContainer}>
        <Field
          className={s.contactFormInput}
          placeholder="Username"
          type="text"
          name="name"
        />
        <ErrorMessage className={s.errorName} name="name" component="span" />
        <Field
          placeholder="Phone number"
          className={s.contactFormInput}
          type="tel"
          name="number"
        />
        <ErrorMessage
          className={s.errorNumber}
          name="number"
          component="span"
        />
        <button className={s.submitBtn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};
