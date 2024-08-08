import Input from "react-validation/build/input";
import React, { useState } from 'react'
import Form from "react-validation/build/form";
import { IconButton, Tooltip } from "@material-ui/core";

const SearchUser = (props) => {

    const defaultForm = {
        userName: '',
        facultyName: '',
        email: '',
        experience: ''
    }
    const [formData, setFormData] = useState(defaultForm);
    const [reqPayload, setReqPayload] = useState({});

    const onFormValueChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData({
            ...formData,
            [name]: value
        })
        if (value !== '') {
            setReqPayload({
                ...reqPayload,
                [name]: value
            })
        }

    }

    const searchUser = () => {
        props.getFacultyData(reqPayload)
    }

    const onClearSearch = () => {
        setFormData(defaultForm);
        setReqPayload({})
        props.getFacultyData({})
    }

    return (
        <div className="edit-profile adviros-details-area border" style={{ padding: "20px", marginBottom: "16px", marginTop: "14px" }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 update-info" style={{ border: 'none' }}>
                        <div className="row">
                            <Form id="profile-form" className="contact-form">
                                <div className="col-md-2">
                                    <div className="form-group">
                                        <Input
                                            type="text"
                                            className="form-control"
                                            name="userName"
                                            placeholder="Username"
                                            value={formData?.userName}
                                            onChange={onFormValueChange}
                                            style={{ fontSize: '1.5rem' }}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="form-group">
                                        <Input
                                            type="text"
                                            className="form-control"
                                            name="facultyName"
                                            placeholder="Faculty Name"
                                            value={formData?.facultyName}
                                            onChange={onFormValueChange}
                                            style={{ fontSize: '1.5rem' }}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="form-group">
                                        <Input
                                            type="email"
                                            className="form-control"
                                            name="email"
                                            placeholder="Email"
                                            value={formData?.email}
                                            onChange={onFormValueChange}
                                            style={{ fontSize: '1.5rem' }}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="form-group">
                                        <Input
                                            type="number"
                                            className="form-control"
                                            name="experience"
                                            placeholder="Experience"
                                            value={formData?.experience}
                                            onChange={onFormValueChange}
                                            style={{ fontSize: '1.5rem' }}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-1">
                                    <IconButton aria-label="search-user" onClick={(e) => {
                                        e.preventDefault();
                                        searchUser();
                                    }}
                                    style={{ padding: "14px 14px", marginLeft: "10px" }}>
                                        <Tooltip id="button-search" title={<h5>Search Facility</h5>}>
                                            <i className="fas fa-search" style={{ fontSize: "24px", color: "#fff" }}></i>
                                        </Tooltip>
                                    </IconButton>
                                </div>
                                <div className="col-md-1">
                                    <IconButton aria-label="cancel-search" onClick={(e) => {
                                        e.preventDefault();
                                        onClearSearch();
                                    }}
                                    style={{ padding: "12px 16px", border: "2px solid #ffb606", background: "#fff", marginLeft: "10px"}} 
                                    >
                                        <Tooltip id="button-cancel" title={<h5>Clear</h5>}>
                                            <i className="fas fa-times" style={{ fontSize: "24px", color: "#ffb606" }}></i>
                                        </Tooltip>
                                    </IconButton>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchUser
