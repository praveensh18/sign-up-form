import { useState,useEffect } from 'react';
import demoApi from '../apis/demoApi';
import history from '../history';

// Custome hook UseForm
const useForm = (setUserList, validate) => {
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })

    // Initially setting errors to empty object
    const [errors, setErrors] = useState({})

    // Function to call on every input change
    const handleChange = event => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    // Function to call on click of submit button
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        setErrors(validate(values));
        
        const isValid = Object.values(validate(values)).length === 0;
        if(isValid) {
            
            demoApi.post('/users', values);
            
            // Calling get user after sign up
            const res = await demoApi.get('/users')
            setUserList(res.data);
            history.push('/users');
        }
    };

    // To keep track of errors on every value change
      useEffect(() => {
          if(Object.keys(errors).length > 0) {
            setErrors(validate(values));
          }
      }, [values])

    return { handleChange, values, handleFormSubmit, errors };
};

export default useForm;