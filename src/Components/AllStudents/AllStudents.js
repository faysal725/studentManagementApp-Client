import React from 'react';
import './AllStudents.css'
import axios from 'axios';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    height:'400px',
    width: '600px',
    marginRight: '-50%',
    borderRadius: '10px',
    backgroundColor: 'yellow',
    border: 'none',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');


const AllStudents = (props) => {
    // console.log(props.std)
    const {_id, name, id, regNo} = props.std

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data =>{
    let name = data.name
      let id = data.id 
      let regNo=   Math.round(Math.random(id)*1000000)
      console.log(name, regNo, id)

      updateStudent(name, id, regNo, _id)
      window.location.reload()
  };





  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }


    function deleteStudent(_id) {
        axios.delete(`http://localhost:5000/delete/${_id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
       
    }


    function updateStudent(name, id, regNo, _id) {
      
      axios.patch(`http://localhost:5000/update/${_id}`, {
        name: name,
        id: id,
        regNo: regNo
      })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
    }

    return (
        <div className="col-md-4 col-lg-3 bg-warning p-3 m-2 text-left text-truncate">
            <p><b>Name: </b> {name}</p>
            <p><b>ID: </b> {id}</p>
            <p><b>Registration no: {regNo}</b></p>
            <div className="d-flex justify-content-center">
            <button onClick={() => openModal()} className="btn btn-primary mx-1">Edit</button>
            <button onClick={() => deleteStudent(_id)} className="btn btn-danger mx-1">Delete</button>
            </div>

            

            <div>
              
                <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                >
                
                <div className="text-center">

                <h2 ref={(_subtitle) => (subtitle = _subtitle)}>{name}</h2><br />

                  <form onSubmit={handleSubmit(onSubmit)}>
                  <input className="edit_modal" defaultValue={name} {...register("name", { required: true })} placeholder="Name"/>
                  <br />
                  {errors.Name && <span>This field is required</span>}
                  <br /><br />
                  <input className="edit_modal" defaultValue={id} {...register("id", { required: true, pattern: /^[0-9]*$/i })} placeholder="ID"/>
                  <br />
                  {errors.id && <span>This field is required</span>}
                  <br /><br />

                  <input className="search_Submit m-2" type="submit" value="UPLOAD" />
                  <button className="search_Submit m-2" onClick={closeModal}>CLOSE</button>

                  </form>

                  </div>
                </Modal>
            </div>
                  

        </div>
    );
};

export default AllStudents;