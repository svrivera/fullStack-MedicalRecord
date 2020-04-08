import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

const Patients = (props) => {
    if (props.records.length === 0) {
        return null;
    }
    return (
        <Fragment>
             <h1 className="my-5">Patient Administrator</h1>
             <div className="container mt-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5 d-flex justify-content-center">
                        <Link to={'/new'} className="btn btn-success text-uppercase py-2 px-5 font-weight-bold"> New Record </Link>
                    </div>
                    <div className="col-md-8 mx-auto">
                        <div className="list-goup">
                            {props.records.map(record => (
                                <Link to={`/records/${record._id}`} key={record._id} className="p-5 list-group-item list-group-item-action flex-column align-items-start">
                                    <div className="d-flex w-100 justify-content-between mb-4">
                                        <h3 className="mb-3">{record.name}</h3>
                                        <small className="date-release">{record.date} - {record.hour}</small>
                                    </div>
                                    <p className="mb-0">{record.symthoms}</p>
                                    <div className="contact py-3">
                                        <p>Insurance: {record.insurance}</p>
                                        <p>Contact: {record.phone}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>           
        </Fragment> 
    );
}

export default Patients;