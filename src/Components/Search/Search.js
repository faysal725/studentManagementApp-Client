import React, { useState } from 'react';
import './Search.css'
import axios from 'axios';
import { useForm } from "react-hook-form";
import AllStudents from '../AllStudents/AllStudents';

const Search = () => {
    const [studentData, setStudentData] = useState(null)
    const [searchData, setSearchData] = useState(null)

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        // console.log(data.searchField)
        let searchItem = data.searchField
        console.log(searchItem, typeof(searchItem))


        let ByName = studentData.filter(st => st.name === searchItem)
        let ById = studentData.filter(st => st.id === searchItem)
        let ByRegno = studentData.filter(st => (st.regNo).toString() === searchItem)

        if (ByName.length !== 0) {

            setSearchData(ByName)
        } else if (ById.length !== 0) {
            setSearchData(ById)
        } else if (ByRegno.length !== 0) {
            setSearchData(ByRegno)
        } else {
            console.log("We got nothing")
        }

    }




    function getAllStudents() {
        axios.get(`http://localhost:5000/student`)
            .then(res => {
                const persons = res.data;
                setStudentData(persons)
            })
    }


    // sorting function for dscending arrangement
    function sortingDscend() {                        
        setSearchData(null)
        let sorted = studentData.sort(function(a, b){
            return a.id - b.id;
        })

        setSearchData(sorted)
        // console.log(sorted, typeof(sorted))
    }

    // sorting function for Ascending arrangement
    function sortingAscend() {
        setSearchData(null)
        let sorted = studentData.sort(function(a, b){
            return b.id - a.id;
        })

        setStudentData(sorted)
        console.log(sorted, typeof(sorted))
    }



    if (studentData === null) {
        getAllStudents()
    }

    console.log(searchData)

    return (
        <div className="container">
            <div className="text-center pb-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="search_Input" placeholder="search something" {...register("searchField")} />
                    <br /><br />
                    <input className="search_Submit" type="submit" />

                </form>
            </div>
            <div className="d-flex row justify-content-center text-left">
                <h1 className="text-center col"><b>Students</b></h1>
                <div class="d-flex bd-highlight pb-5 justify-content-center">
                         <button onClick={() => sortingAscend()} className="btn btn-info m-2"><b>Ascending</b></button>
                        <button onClick={() => sortingDscend()} className="btn btn-secondary m-2"><b>Descending</b></button>
                </div>

                {(() => {

                    if (searchData !== null) {
                        return searchData?.map(std => <AllStudents std={std} ></AllStudents>);
                    }

                    return studentData?.map(std => <AllStudents std={std} ></AllStudents>);
                })()}

            </div>
        </div>
    );
};

export default Search;