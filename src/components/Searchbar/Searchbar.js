import React from 'react';
import { Formik } from 'formik';
import { Form, Field, Button, SearchbarHeader } from './Searchbar.styled';
import { AiOutlineSearch } from 'react-icons/ai';

export const Searchbar = ({ onSubmit }) => {
  return (
    <SearchbarHeader>
      <Formik
        initialValues={{
          searchValue: '',
        }}
        onSubmit={(values, actions) => {
          console.log(values);
          console.log(values.searchValue);
          onSubmit(values.searchValue);
          actions.resetForm();
        }}
      >
        <Form>
          <Button type="submit">
            <AiOutlineSearch size="24" />
          </Button>

          <Field
            name="searchValue"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </Form>
      </Formik>
    </SearchbarHeader>
  );
};
