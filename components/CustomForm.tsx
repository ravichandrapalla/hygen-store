"use client";

import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please provide valid email")
    .required("This field is required"),
  password: Yup.string().required("Password is needed"),
});

const CustomForm = ({
  heading = "no heading",
  fields = [],
  context = "login",
}) => {
  const handleSubmit = (formData) => {
    console.log(formData);
  };
  const getContextButtons = () => {
    switch (context) {
      case "login": {
        return (
          <>
            <button
              type="submit"
              className="w-full bg-green-400 hover:bg-green-500 transition-colors text-black font-semibold py-3 rounded-full"
            >
              Login
            </button>

            <button
              type="button"
              className="w-full border border-[#3C3C44] hover:bg-[#1A1A1F] transition-colors text-white font-semibold py-3 rounded-full"
            >
              Create Account
            </button>
            <div className="text-center mt-3">
              <a href="#" className="text-sm text-gray-400 hover:text-white">
                Forgot Password?
              </a>
            </div>
          </>
        );
      }
      case "sign-up": {
        return (
          <>
            <button type="submit">{context}</button>
          </>
        );
      }
    }
  };

  return (
    <div className="w-full max-w-xs mx-auto">
      <h1 className="heading-2">{heading}</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className="space-y-4">
            {fields.map((fieldData) => (
              <div key={fieldData.id}>
                <label className="block text-sm mb-1" htmlFor={fieldData.name}>
                  {fieldData.label}
                </label>
                <Field
                  name={fieldData.name}
                  type={fieldData.name}
                  className="w-full bg-[#1A1A1F] border-none rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <ErrorMessage name={fieldData.name} component="div" />
              </div>
            ))}

            {getContextButtons()}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CustomForm;
