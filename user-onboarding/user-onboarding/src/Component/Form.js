import React from 'react';

export default function Form(props) {
    const {
        values,
        submit,
        change,
        disabled,
        errors,
        checkbox
    } = props

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    
    return (
        <form className='form-container' onSubmit={onSubmit} >
            <div className = 'form-group submit'>
                <h2>Add a User</h2>
                <button disabled={disabled}>Submit</button>
                <div className='errors'>
                    <div>{errors.username}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                </div>
            </div>
            <div className='form group inputs'>
                <h4>General Info</h4>
                <label>Username: 
                    <input 
                    value={values.username}
                    onChange={change}
                    type='text'
                    name='username'
                    />
                </label>
                <label>Email: 
                    <input 
                    value={values.email}
                    onChange={change}
                    type='email'
                    name='email'
                    />
                </label>
                <label>Password: 
                    <input 
                    value={values.password}
                    onChange={change}
                    type='password'
                    name='password'    
                    />
                </label>
                <label>Terms of Service
                    <input 
                    type='checkbox'
                    name='tos'
                    onChange={checkbox}
                    checked={values.tos}
                    />
                </label>
            </div>
        </form>
    )
}
