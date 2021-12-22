export default function validateInfo(values) {
    let errors = {};
    
    // First Name
    if(!values.firstName.trim()) {
        errors.firstName = 'First name is required';
    }
    
    // Last Name
    if(!values.lastName.trim()) {
        errors.lastName = 'Last name is required';
    }
    
    // Email
    if(!values.email) {
        errors.email = 'Email is required';
    } else if(!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(values.email)) {
        errors.email = 'Please enter valid email'
    }
    
    // Password
    if(!values.password) {
        errors.password = 'Password is required';
    } else if(values.password.length < 8) {
        errors.password = 'Password needs to be more than 8 characters'
    } else if(values.password === values.firstName) {
        errors.password = 'Password can not contain your first name'
    } else if(values.password === values.lastName) {
        errors.password = 'Password can not contain your last name'
    } else if(!/(?=.*?[A-Z])(?=.*?[a-z])/.test(values.password)) {
        errors.password = 'Password should contain lower and uppercase letters'
    }
    return errors;
}