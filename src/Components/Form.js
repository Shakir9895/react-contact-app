import React from 'react'

import { useForm } from "react-hook-form";

function Form({formSub2}) {

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSub=(data)=>{
        data.id=Date.now();
        data.fav=false;
        formSub2(data);
        // console.log(data)

        reset();
    };
    // console.log(errors)


    return (

        <div className='col-sm-4 shadow rounded g-5'>
            <h1 className='text-center pt-3 text-secondary h2 '>Add Contact</h1>
            <form onSubmit={handleSubmit(onSub)}>
                <div className='form-group'>
                    <label className='col-form-label'>Name:</label>
                    <input type="text" className='form-control' 
                     {...register("name", {
                        required: 'Name is required'
                    })} />

                    {errors.name && (
                         <small className='text-danger'>{errors.name.message}</small>
                    )}

                   


                </div>
                <div className='form-group'>
                    <label className='col-form-label'>Email:</label>
                    <input type="text" className='form-control' 
                    {...register("Email", {
                        required: 'Email is required',

                        pattern: {
                            value: /[A-Za-z]{3}/,
                            message: 'Invalid Email'
                          }

                    })} />
                    {errors.Email && (
                         <small className='text-danger'>{errors.Email.message}</small>
                    )}
                </div>
                <div className='form-group'>
                    <label className='col-form-label'>Phone:</label>
                    <input type="text" className='form-control' 
                    {...register("Phone", {
                        required: 'Phone is required',
                        pattern: {
                            value: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                            message: 'Invalid Phone number'
                          }
                        
                    })} />
                    {errors.Phone && (
                         <small className='text-danger'>{errors.Phone.message}</small>
                    )}
                </div>
                <input type="submit"
                    className='btn btn-primary my-3'
                    value='Add Contact'
                />
            </form>
        </div>
    )
}

export default Form