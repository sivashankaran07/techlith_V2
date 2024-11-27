import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import SEO from "../components/data/seo";
import homeInfo from "../components/data/homePage";
import Header from "../UI/Header";
import "../assets/styles/Contact.css";
import { Container, Row, Col } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { sendContactForm } from "../Api/contactServicesAPI"; 

const Contact = () => {
  const currentSeo = SEO.find((item) => item.page.toLowerCase() === "contact") || {};

  // Validation schema using Yup
  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .matches(/^[A-Za-z]+$/, "First Name must contain only alphabets")
      .required("First Name is required"),
    lastName: Yup.string()
      .matches(/^[A-Za-z]+$/, "Last Name must contain only alphabets")
      .required("Last Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  // Initial form values
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  };

  // Handle form submission
  const handleSubmit = async (values, { resetForm, setSubmitting, setErrors }) => {
    try {
      const response = await sendContactForm(values);
      console.log("Form submitted successfully:", response);
      resetForm(); 
    } catch (error) {
      console.error("Form submission error:", error);
      setErrors({ submit: "An error occurred while submitting the form. Please try again later." });
    }
    setSubmitting(false); 
  };

  return (
    <>
      <Helmet>
        <title>{currentSeo.title || `Contact | ${homeInfo.main.title}`}</title>
        <meta
          name="description"
          content={currentSeo.description || "Default description"}
        />
        <meta
          name="keywords"
          content={currentSeo.keywords?.join(", ") || "Default keywords"}
        />
      </Helmet>
      <div>
        <section style={{ background: "hsl(230deg 60% 98.04%)" }}>
          <Header />
        </section>
        <Container>
          <Row>
            <Col xl={6}>
              <div className="contact-container">
                <div className="textContent">
                  <h1>Contact Us & Let’s Collaborate!</h1>
                  <h6>
                    Rhoncus parturient nam tristique nec accumsan in felis
                    taciti conubia sociosqu parturient.
                  </h6>
                </div>
                <div className="formContent">
                  <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                  >
                    {({ isSubmitting }) => (
                      <Form>
                        <Row>
                          <Col xl={6}>
                            <label htmlFor="firstName">
                              First Name <span className="text-danger">*</span>
                            </label>
                            <Field
                              type="text"
                              className="form-control"
                              id="firstName"
                              name="firstName"
                            />
                            <ErrorMessage
                              name="firstName"
                              component="div"
                              className="error"
                            />
                          </Col>
                          <Col xl={6}>
                            <label htmlFor="lastName">
                              Last Name<span className="text-danger">*</span>
                            </label>
                            <Field
                              type="text"
                              className="form-control"
                              id="lastName"
                              name="lastName"
                            />
                            <ErrorMessage
                              name="lastName"
                              component="div"
                              className="error"
                            />
                          </Col>
                        </Row>
                        <Row>
                          <Col xl={12}>
                            <label htmlFor="email">
                              Email<span className="text-danger">*</span>
                            </label>
                            <Field
                              type="email"
                              className="form-control"
                              id="email"
                              name="email"
                            />
                            <ErrorMessage
                              name="email"
                              component="div"
                              className="error"
                            />
                          </Col>
                        </Row>
                        <Row>
                          <Col xl={12}>
                            <label htmlFor="message">
                              Message<span className="text-danger">*</span>
                            </label>
                            <Field
                              as="textarea"
                              className="form-control"
                              id="message"
                              name="message"
                              rows="4"
                            />
                            <ErrorMessage
                              name="message"
                              component="div"
                              className="error"
                            />
                          </Col>
                        </Row>
                        <button
                          type="submit"
                          className="btn btn-primary mt-3"
                          disabled={isSubmitting}
                        >
                          Submit
                        </button>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
            </Col>
            <Col xl={6}>
              <div className="map-container">Map goes here.</div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Contact;
