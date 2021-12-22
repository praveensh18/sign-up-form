import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SignupForm from '../SignupForm';
import validateInfo from '../../validation/validateInfo';

describe('validation', () => {
    let values;
    
    it('validation for empty fields', () => {
        values = { firstName: '', lastName: '', email: '', password: ''}
        expect(validateInfo(values)).toStrictEqual({
            "firstName": "First name is required",
            "lastName": "Last name is required",
            "email": "Email is required",
            "password": "Password is required"
        })
    });
    
    it('validation for password same as first name', () => {
        values = { firstName: 'FirstName', lastName: 'LastName', email: 'example@abc.com', password: 'FirstName'}
        expect(validateInfo(values)).toStrictEqual({"password": "Password can not contain your first name"})
    });
});

it('signup form page should render without crashing', () => {
    const div = document.createElement("div")
    ReactDOM.render(<SignupForm></SignupForm>, div)
});

it('Should render signup form page correctly', () => {
    const component = render(<SignupForm setUserList={[]}></SignupForm>)
    const inputName = component.getByText("First Name");
    const inputPassword = component.getByText("Password");
    
    expect(inputName).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();
});