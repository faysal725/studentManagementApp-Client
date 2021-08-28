import React, { useState } from 'react';
import './Search.css'
import axios from 'axios';
import { useForm } from "react-hook-form";
import AllStudents from '../AllStudents/AllStudents';

const Search = () => {
    const [studentData, setStudentData] = useState(null)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data =>{
        setStudentData(data)
    }


    function getAllStudents() {
        axios.get(`http://localhost:5000/student`)
        .then(res => {
          const persons = res.data;
          setStudentData(persons)
        })
    }


    if (studentData === null) {
        getAllStudents()
    }

    return (
        <div className="container">
            <div className="text-center pb-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="search_Input" placeholder="search something" {...register("searchField")} />
                    <br /><br />
                    <input className="search_Submit" type="submit" />
                </form>
            </div>
            <div className="d-flex row justify-content-center text-center">
                <h1><b>Students</b></h1>
                {
                    studentData?.map(std =><AllStudents std={std} ></AllStudents>)
                }
            </div>
        </div>
    );
};

export default Search;