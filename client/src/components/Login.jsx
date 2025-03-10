import React from "react";
import {Formik, Form, Field, ErrorMessage} from "formik";
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
        })
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
        <div className="container">
            <h1>Login</h1>
            <Formik initialValues={{}} onSubmit={handleClickLogin} validationSchema={validationLogin}>
                <Form className="login-form">
                    <div className="login-form-group">
                        <Field name="email" className="form-field" placeHolder="Email"/>
                        <ErrorMessage component="span" name="email" className="form-error"  />
                    </div>

                    <div className="login-form-group">
                        <Field name="password" className="form-field" placeHolder="Senha"/>
                        <ErrorMessage component="span" name="password" className="form-error"  />
                    </div>

                    <button className="button" type="submit">Login</button>
  
                </Form>
            </Formik>



            <h1>Cadastro</h1>
            <Formik initialValues={{ email: "", password: "", confirmPassword: "" }} onSubmit={handleClickRegister} validationSchema={validationRegister}>
                <Form className="login-form">
                    <div className="login-form-group">
                        <Field name="email" className="form-field" placeHolder="Email"/>
                        <ErrorMessage component="span" name="email" className="form-error"  />
                    </div>

                    <div className="login-form-group">
                        <Field name="password" className="form-field" placeHolder="Senha"/>
                        <ErrorMessage component="span" name="password" className="form-error"  />
                    </div>

                    <div className="login-form-group">
                        <Field name="confirmPassword" className="form-field" placeHolder="Senha"/>
                        <ErrorMessage component="span" name="confirmPassword" className="form-error"  />
                    </div>

                    <button className="button" type="submit">Cadastrar</button>
  
                </Form>
            </Formik>
        </div>
    );
};

export default Login