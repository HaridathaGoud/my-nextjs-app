'use client'
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useRouter } from 'next/navigation';


const StudentForm = () => {
const nav = useRouter();
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        age: '',
    });
    const [errors, setErrors] = useState({});

useEffect(()=>{
  fetchData();
},[])
    // getting data from apicall
    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3000/data');
            const responseData = response.data;
            setData(responseData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    // listeing inputfields data
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        // Clear any previous validation errors for the input field
        setErrors({
            ...errors,
            [name]: '',
        });
    };

    // validtions
    const validate = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }
        if (!formData.age.trim()) {
            newErrors.age = 'Age is required';
        }
        else if (isNaN(formData.age) || parseInt(formData.age) < 0) {
            newErrors.age = 'Age must be a positive number';
        }

        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();

        if (Object.keys(validationErrors).length > 0) {
            // There are validation errors; do not submit the form
            setErrors(validationErrors);
        } 
        else {
            // Validation passed; submit the form
            try {
                const response = await axios.post(
                    'http://localhost:3000/data',
                    formData
                );
                const responseData = response.data;
                //responseData
                console.log('Data saved:', responseData);
                // Fetch updated data after saving
                fetchData();
                // Reset the form
                setFormData({ id:'', name: '', age: '' });
                nav.push('/stdtable')
            } catch (error) {
                console.error('Error saving data:', error);
            }
        }
    };

    const CancelStd=()=>{
        setFormData({ id:'', name: '', age: '' });
    }

    return (<>
        <div>StudentForm</div>
    
        <form onSubmit={handleSubmit}>
        <div>
          <label>
            Id:
            <input
              type="number"
              name="id"
              value={formData.id}
              onChange={handleInputChange}
            />
          </label>

        </div> 
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </label>
          {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
        </div>

        <div>
          <label>
            Age:
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
            />
          </label>
          {errors.age && <p style={{ color: 'red' }}>{errors.age}</p>}
        </div>
        <button type="submit">Save Data</button>   
      </form>
      <button onClick={()=>CancelStd()}>Cancel</button>

    </>)
}

export default StudentForm;