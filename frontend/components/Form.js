import React, { useEffect,useState } from 'react';
import axios from 'axios'; // Import Axios for HTTP requests
import * as yup from 'yup';
import { isValid } from 'ipaddr.js';


const validationErrors = {
  fullNameTooShort: "full name must be at least 3 characters",
  fullNameTooLong: "full name must be at most 20 characters",
  sizeIncorrect: "size must be S or M or L"
}

const toppings = [
  { topping_id: "1", text: "Pepperoni" },
  { topping_id: "2", text: "Green Peppers" },
  { topping_id: "3", text: "Pineapple" },
  { topping_id: "4", text: "Mushrooms" },
  { topping_id: "5", text: "Ham" },
]

const initialFormValues = {
  fullName: '',
  size: '',
  toppings: []
};

const initialErrors = {
  fullName: "",
  size: ""
};

const schema = yup.object().shape({
fullName: yup.string().trim().min(3, validationErrors.fullNameTooShort).max(20, validationErrors.fullNameTooLong).required(),
size: yup.string().oneOf(['S', 'M', 'L'], validationErrors.sizeIncorrect).required()
});
 
export default function Form() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [message, setMessage] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [errors, setErrors] = useState(initialErrors);

  const handleTextChange = (e) => {
    const {id, value} = e.target;
    setFormValues({...formValues, [id]: value})
    yup.reach(schema, id).validate(value)
    .then(() => {setErrors({...errors, [id]: ""})})
    .catch((err) => {setErrors({...errors, [id]: err.errors[0]})})
  }

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setIsDisabled(!valid);
    })
  }, [formValues]);

  const handleCheckboxChange = (e) => {
    const {name, checked} = e.target;
    const toppings = [...formValues.toppings];
    if (checked) {
      toppings.push(name);
    } else {
      toppings = toppings.filter((topping) => topping != name)
    }
    setFormValues({...formValues, toppings: toppings});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post('http://localhost:9009/api/order', formValues);
    //console.log(response);
    setMessage(response.data.message);
    setFormValues(initialFormValues)
  }

  return(
    <form onSubmit={handleSubmit}>
      <h2>Order Your Pizza</h2>
      {message && <div className='success'>{message}</div>}
      {/* {true && <div className='failure'>Something went wrong</div>} */}

      <div className='input-group'>
      <div>
      <label htmlFor='fullName'>Full Name</label><br />
      <input 
      onChange={handleTextChange}
      value={formValues.fullName}
      placeholder='Type full name' 
      id="fullName" 
      type="text" 
      />
      </div>
      {errors.fullName && <div className='error'>{errors.fullName}</div>}
      </div>

      <div className='input-group'>
        <div>
          <label htmlFor='size'>Size</label>
          <br />
          <select onChange={handleTextChange} value={formValues.size} id="size">
            <option value="">----Choose Size----</option>
            <option value="S">Small</option>
            <option value="M">Medium</option>
            <option value="L">Large</option>
          </select>
        </div>
        {errors.size && <div className='error'>{errors.size}</div>}
      </div>

      <div className='input-group'>
        
        {toppings.map((topping) => (
        <label key={topping.topping_id}>
          <input onChange={handleCheckboxChange} name={topping.topping_id} type="checkbox" />
          {topping.text}
          <br />
        </label>
      ) )}
      </div>

      <input disabled={isDisabled} type='submit' />
    </form>
  )
}