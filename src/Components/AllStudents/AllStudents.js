import React from 'react';
import axios from 'axios';

const AllStudents = (props) => {
    // console.log(props.std)
    const {_id, name, id, regNo} = props.std



    function deleteStudent(_id) {
        axios.delete(`http://localhost:5000/delete/${_id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
        console.log(typeof(_id), _id)
    }

    return (
        <div className="col-md-3 bg-warning p-2 m-2 text-center">
            <p><b>Name: </b> {name}</p>
            <p><b>ID: </b> {id}</p>
            <p><b>Registration no: </b></p>
            <div className="d-flex justify-content-center">
            <button className="btn btn-primary mx-1">Edit</button>
            <button onClick={() => deleteStudent(_id)} className="btn btn-danger mx-1">Delete</button>
            </div>
        </div>
    );
};

export default AllStudents;