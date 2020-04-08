import React, {Fragment} from 'react';
import { Link, withRouter } from 'react-router-dom';
import axiosClient from '../config/axios';
import Swal from 'sweetalert2';

const Record = (props) => {
    if (!props.record) {
        // If there's no id from memory has to redirect
        props.history.push('/');
        return null;
        
    }
    // Deleted a record with id
    const deleteRecord = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.value) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
              axiosClient.delete(`/patients/${id}`)
                .then(() => {
                    props.saveRefresh(true);
                    props.history.push('/');
                })
                .catch(error => console.log(error));
            }
          })
    }
    
    

    // Destructures the recorrd object
    const {name, date, hour, insurance, phone, symthoms} = props.record;
    return ( 
        <Fragment>
            <h1>Paciente: {name}</h1>
            <div className="container mt-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5 d-flex justify-content-center">
                        <Link to={'/'} className="btn btn-success text-uppercase py-2 px-5 font-weight-bold">
                            Go back
                        </Link>
                    </div>
                    <div className="col-md-8 mx-auto">
                        <div className="list-group">
                            <div className="p-5 list-group-item list-group-item-action flex-column align-items-center">
                                <div className="d-flex w-100 justify-content-between mb-4">
                                    <h3 className="mb-3">{name}</h3>
                                    <small className="date-release">{date} - {hour}</small>
                                </div>
                                <p className="mb-0">{symthoms}</p>
                                <div className="contact py-3">
                                    <p>Insurance: {insurance}</p>
                                    <p>Contact: {phone}</p>
                                </div>
                                <div className="d-flex">
                                    <button type="button"
                                            onClick={() => deleteRecord(props.record._id)}
                                            className="text-uppercase y-2 px-5 font-weight-bold btn btn-danger col">
                                            Delete &times;
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
        
    );
}
 
export default withRouter(Record);