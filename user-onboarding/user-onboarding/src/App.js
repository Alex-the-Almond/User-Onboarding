import './App.css';
import Form from './Component/Form';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import * as yup from 'yup';
import User from './Component/Users'
import formSchema from './validation/formSchema'

const initialFormValues = {
  username: '',
  email: '',
  password: '',
  tos: false,
};

const initialFormErrors = {
  username: '',
  email: '',
  password: '',
  tos: false,
};

const initialUsers = [];

const initialDisabled = true;


function App() {
  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

    const postNewUser = (user) => {
      axios.post('https://reqres.in/api/users', user)
      .then((res) => {
        setUsers([res.data, ...users]);
      }).catch(err => console.error(err))
      .finally(() => setFormValues(initialFormValues));
    };

    const validate = (name, value) => {
      yup.reach(formSchema, name)
        .validate(value)
        .then(() => setFormErrors({ ...formErrors, [name]: "" }))
        .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
    }
    
    const inputChange = (evt) => {
      const {name} = evt.target
      const {value} = evt.target
      validate(name, value)
      setFormValues({...formValues, [name]: value});
    };

    const checkboxChange = (evt) => {
      const {name} = evt.target
      const {checked} = evt.target
      validate(name, checked);
      setFormValues({...formValues, [name]: checked, })
    }

    const formSubmit = () => {
      const newUser = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      tos: formValues.tos
    };
    postNewUser(newUser)
  };

  useEffect(() => {
    formSchema.isValid(formValues).then((valid) => {setDisabled(!valid)});
  })


  return (
    <div className="App">
      <header className="App-header"> User Onboarding
        <Form 
        values={formValues}
        change={inputChange}
        checkbox={checkboxChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
        />
        {
          users.map(user => {
            return (
              <User key={user.id} details={user}/>
            )
          })
        }
      </header>
    </div>
  );
}

export default App;
