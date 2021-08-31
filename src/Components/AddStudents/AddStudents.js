import React from 'react';
import './AddStudents.css'
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddStudents = () => {

const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data =>{
      
      let name = data.name
      // let image = data.image[0]
      let id = data.id 
      let regNo=   Math.round(Math.random(id)*1000000)

      uploadInfo(name, id, regNo)
     window.location.reload()
  };


  function uploadInfo(name, id, regNo) {
      axios.post(`http://localhost:5000/addStudent`, { name, id, regNo })
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
}



    return (
        <div className="container d-flex justify-content-center">
                <div className="text-center student_form">
                    <h2><b>Enter Student Info</b></h2>
                    <br />
                    <form onSubmit={handleSubmit(onSubmit)}>

                    <input  {...register("name", { required: true })} placeholder="Name"/>
                    <br />
                    {errors.Name && <span>This field is required</span>}
                    <br /><br />
                    <input {...register("id", { required: true, pattern: /^[0-9]*$/i })} placeholder="ID"/>
                    <br />
                    {errors.id && <span>This field is required</span>}
                    <br /><br />
                    {/* <input type="file"  {...register("image", { required: true })} />
                    <br />
                    {errors.image && <span>This field is required</span>}
                    <br /><br /> */}
                    
                    <input className="search_Submit" type="submit" value="UPLOAD" />
                    </form>

                </div>
            
        </div>
    );
};

export default AddStudents;