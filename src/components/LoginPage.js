import React, { useState } from 'react';
import {link} from 'react-router-dom'
function LoginPage() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Validation function
    const validate = () => {
        let errors = {};
        if (!formData.email) errors.email = 'Email is required';
        if (!formData.password) errors.password = 'Password is required';
        return errors;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            console.log('Login Data:', formData);
            // Add authentication logic here (e.g., call an API)
        }
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Login Page</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
                <FormInput label="Email" name="email" type="email" value={formData.email} onChange={handleChange} error={errors.email} />
                <FormInput label="Password" name="password" type="password" value={formData.password} onChange={handleChange} error={errors.password} />

                <button type="submit" style={styles.submitButton}>Login</button>
                {/* <link>click </link> */}
            </form>
        </div>
    );
}


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

// Inline CSS styles
const styles = {
    container: {
        maxWidth: '400px',
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
    error: {
        color: 'red',
        fontSize: '12px',
        marginTop: '5px'
    }
};

export default LoginPage;
