import React, {Fragment, useState} from 'react';
import {Link, withRouter} from 'react-router-dom';
import axiosClient from '../config/axios';

const NewRecord = (props) => {
    // Sets state for the form
    const [record, saveRecord] = useState({
        name: '',
        insurance: '',
        phone: '',
        date: '',
        hour: '',
        symthoms: ''
    });
    // Reads state from the form
    const updateStore = e => {
        saveRecord({
            // Gets a copy of whats in the state
            ...record,
            // Updates record's attributes
            [e.target.name] : e.target.value
        });
    };

    const addNewRecord = (e) => {
        e.preventDefault();
        // Send request with 
        axiosClient.post('/patients', record)
        .then( () => {
            // Changes state refresh to true
            props.saveRefresh(true);
            // redirect to patients
            props.history.push('/');
        }).catch(error => console.log(error));

    };

    return (
        <Fragment>
            <h1 className="my-5">Add new record</h1>

             <div className="container mt-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5 d-flex justify-content-center">
                        <Link to={'/'} className="btn btn-success text-uppercase py-2 px-5 font-weight-bold"> Back </Link>
                    </div>
                    <div className="col-md-8 mx-auto">
                        <form className="bg-white p-5 bordered" onSubmit={addNewRecord}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    id="name" 
                                    name="name" 
                                    placeholder="Patient name"
                                    onChange={updateStore}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="Insurance">Insurance</label>
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    id="insurance" 
                                    name="insurance" 
                                    placeholder="Patients insurance"
                                    onChange={updateStore}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="Phone">Phone</label>
                                <input 
                                    type="phone" 
                                    className="form-control form-control-lg" 
                                    id="phone" 
                                    name="phone" 
                                    placeholder="Phone number"
                                    onChange={updateStore}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="date">Date release</label>
                                <input 
                                    type="date" 
                                    className="form-control form-control-lg" 
                                    id="date" 
                                    name="date"
                                    onChange={updateStore}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="hora">Time of release</label>
                                <input 
                                    type="time" 
                                    className="form-control form-control-lg" 
                                    id="hour" 
                                    name="hour"
                                    onChange={updateStore}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="symthoims">Symthoms</label>
                                <textarea 
                                    className="form-control" 
                                    name="symthoms" 
                                    rows="6"
                                    onChange={updateStore}
                                ></textarea>
                            </div>

                            <input type="submit" className="btn btn-success mt-3 w-100 p-3 text-uppercase font-weight-bold" value="Add record"/>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
 
export default withRouter(NewRecord);