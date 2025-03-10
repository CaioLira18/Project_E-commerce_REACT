import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import Axios from "axios";

const Login = () => {
  const handleClickRegister = (values) => {
    Axios.post("http://localhost:3001/register", {
      email: values.email,
      password: values.password,
    }).then((response) => {
      console.log(response);
    });
  };

  const handleClickLogin = (values) => {
    Axios.post("http://localhost:3001/login", {
      email: values.email,
      password: values.password,
    }).then((response) => {
      console.log(response);
    });
  };

  const validationLogin = yup.object().shape({
    email: yup.string().email("Não é um email Valido").required("Esse Campo é Obrigatorio"),
    password: yup.string().min(8, "A Senha deve conter no minimo 8 Caracteres").required(),
  });

  const validationRegister = yup.object().shape({
    email: yup.string().email("Não é um email Valido").required("Esse Campo é Obrigatorio"),
    password: yup.string().min(8, "A Senha deve conter no minimo 8 Caracteres").required(),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], "As Senhas devem ser iguais"),
  });

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="user-icon">
          <i className="fas fa-user"></i>
        </div>
        
        <Formik initialValues={{}} onSubmit={handleClickLogin} validationSchema={validationLogin}>
          <Form className="login-form">
            <div className="login-form-group">
              <i className="fas fa-envelope"></i>
              <Field name="email" className="form-field" placeholder="Email ID" />
              <ErrorMessage component="span" name="email" className="form-error" />
            </div>

            <div className="login-form-group">
              <i className="fas fa-lock"></i>
              <Field type="password" name="password" className="form-field" placeholder="Password" />
              <ErrorMessage component="span" name="password" className="form-error" />
            </div>

            <div className="remember-forgot">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <a href="#" className="forgot-link">Forgot Password?</a>
            </div>

            <button className="login-button" type="submit">LOGIN</button>
          </Form>
        </Formik>

        <div className="register-link">
          <button className="register-button" onClick={() => document.getElementById('register-form').style.display = 'block'}>REGISTER</button>
        </div>

        <div id="register-form" style={{ display: 'none' }}>
          <h2>Register</h2>
          <Formik initialValues={{}} onSubmit={handleClickRegister} validationSchema={validationRegister}>
            <Form className="login-form">
              <div className="login-form-group">
                <i className="fas fa-envelope"></i>
                <Field name="email" className="form-field" placeholder="Email" />
                <ErrorMessage component="span" name="email" className="form-error" />
              </div>

              <div className="login-form-group">
                <i className="fas fa-lock"></i>
                <Field type="password" name="password" className="form-field" placeholder="Password" />
                <ErrorMessage component="span" name="password" className="form-error" />
              </div>

              <div className="login-form-group">
                <i className="fas fa-lock"></i>
                <Field type="password" name="confirmPassword" className="form-field" placeholder="Confirm Password" />
                <ErrorMessage component="span" name="confirmPassword" className="form-error" />
              </div>

              <button className="login-button" type="submit">REGISTER</button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;