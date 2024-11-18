import React, { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';

function RegistrationForm() {
    // Initial state for all form fields
    const navigate=useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        age: '',
        address: '',
        phone: ''
    });

    const [errors, setErrors] = useState({});

    // Handle input changes for each field
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Basic validation function
    const validate = () => {
        let errors = {};
        if (!formData.name) errors.name = 'Name is required';
        if (!formData.email) errors.email = 'Email is required';
        if (!formData.password) errors.password = 'Password is required';
        if (!formData.age || formData.age <= 0) errors.age = 'Please enter a valid age';
        if (!formData.address) errors.address = 'Address is required';
        if (!formData.phone) errors.phone = 'Phone number is required';
        return errors;
    };

 
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            console.log('Form Data Submitted:', formData);
            
        }
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Registration Page</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
                <FormInput label="Name" name="name" value={formData.name} onChange={handleChange} error={errors.name} />
                <FormInput label="Email ID" type="email" name="email" value={formData.email} onChange={handleChange} error={errors.email} />
                <FormInput label="Password" type="password" name="password" value={formData.password} onChange={handleChange} error={errors.password} />
                <FormInput label="Age" type="number" name="age" value={formData.age} onChange={handleChange} error={errors.age} />
                <FormInput label="Address" name="address" value={formData.address} onChange={handleChange} error={errors.address} />
                <FormInput label="Phone Number" name="phone" value={formData.phone} onChange={handleChange} error={errors.phone} />

                <button type="submit" style={styles.submitButton}>Register</button>
            </form>
            <div><p>if you already registerd <Link to={'/login'}>click</Link></p>
            
            </div>
          
        </div>
    );
}

// Helper component for rendering form inputs with labels and error messages
function FormInput({ label, name, type = 'text', value, onChange, error }) {
    return (
        <div style={styles.inputGroup}>
            <label style={styles.label}>{label}</label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                style={styles.input}
            />
            {error && <p style={styles.error}>{error}</p>}
        </div>
    );
}

const styles = {
    container: {
        maxWidth: '400px',
        maxHeight:'40rem',
        margin: '0 auto',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        backgroundColor: '#f9f9f9',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'
    },
    title: {
        textAlign: 'center',
        color: '#333'
    },
    form: {
        display: 'flex',
        flexDirection: 'column'
    },
    inputGroup: {
        marginBottom: '15px'
    },
    label: {
        marginBottom: '5px',
        color: '#555',
        fontWeight: 'bold',
        fontSize: '14px'
    },
    input: {
        width: '100%',
        padding: '10px',
        fontSize: '14px',
        borderRadius: '4px',
        border: '1px solid #ddd',
        outline: 'none',
        transition: 'border-color 0.2s'
    },
    inputFocus: {
        borderColor: '#4CAF50'
    },
    submitButton: {
        padding: '10px',
        backgroundColor: '#4CAF50',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        fontSize: '16px',
        cursor: 'pointer',
        transition: 'background-color 0.3s'
    },
    submitButtonHover: {
        backgroundColor: '#45A049'
    },
    error: {
        color: 'red',
        fontSize: '12px',
        marginTop: '5px'
    }
};

export default RegistrationForm;
