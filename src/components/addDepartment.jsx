import React, { useEffect, useState } from 'react'
import './compCSS/addDept.css'
import axios from "axios";
import MenuItem from '@mui/material/MenuItem';
import { TextField, Button, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { getData } from '../redux/actions/departmentAction';

function AddDepartment() {

    const dispatch = useDispatch();

    const [entry, setEntry] = useState({});
    const [submit, setSubmit] = useState(false);
    const navigate = useNavigate()

    function HandleChange(event) {
        const { name, value } = event.target;
        setEntry(item => {
            return {
                ...item,
                [name]: value
            };
        });
    }

    function submitHandler(event) {
        event.preventDefault();
        setSubmit(true);
        // setEntry({...entry, "id": Math.random()})
        dispatch(getData({...entry, id: Math.random()}))
        navigate("/")
        // try {
        //     axios.post('https://dummyjson.com/users/add', {
        //         firstName: entry.dept
        //     }).then(res => { console.log(res) })
        // } catch (error) {
        // }

    }

    // useEffect(() => {
    //     if (submit) {
    //         (async function () {
    //             try {
    //                 await axios.post('https://dummyjson.com/users/add', {
    //                     firstName: `${entry.dept}`
    //                 }).then(res => { console.log(res) })
    //             } catch (error) {
    //                 console.log(error);
    //             }
    //         })();
    //     }
    // }, [entry])


    return (
        <div className='main'>
            <div className='addDepartment'>
                <div className='nav'>
                    <li>Department list</li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M2.91946 0.175421C3.1624 -0.0584297 3.55572 -0.0584297 3.79805 0.175421L8.93599 5.13333C9.42127 5.60162 9.42127 6.36133 8.93599 6.82962L3.76077 11.8244C3.52031 12.0559 3.13196 12.059 2.88839 11.8306C2.63985 11.5974 2.63675 11.2129 2.88156 10.976L7.61811 6.40569C7.86105 6.17125 7.86105 5.7917 7.61811 5.55726L2.91946 1.02327C2.67651 0.789422 2.67651 0.409265 2.91946 0.175421Z" fill="#9B9B9B" />
                        </svg>
                    </li>
                    <li>View Detail</li>
                </div>
                <form>
                    <div className="whitebg">
                        <div className="labelitem">Department Name</div>
                        {/* <input value={Math.random()} name="Id" /> */}
                        <TextField
                            type="text"
                            name="dept"
                            onChange={HandleChange}
                            variant='outlined'
                            color='secondary'
                            label="Enter Department Name"
                            fullWidth
                            sx={{ mb: 4 }}
                        />
                        <Stack spacing={2} direction="row"  >
                            <div className='state'>
                                <div className="labelitem">State</div>
                                <div>
                                    <TextField
                                        variant='outlined'
                                        color='secondary'
                                        label="State"
                                        name="states"
                                        select
                                        fullWidth
                                        onChange={HandleChange}
                                    >
                                        <MenuItem key={1} value="Uttar Pradesh">
                                            Uttar Pradesh
                                        </MenuItem>
                                        <MenuItem key={2} value="Delhi">
                                            Delhi
                                        </MenuItem>
                                        <MenuItem key={3} value="Maharashtra">
                                            Maharashtra
                                        </MenuItem>
                                    </TextField>
                                </div>
                            </div>
                            <div className='state'>
                                <div className="labelitem">
                                    City
                                </div>
                                <div>
                                    <TextField
                                        variant='outlined'
                                        color='secondary'
                                        label="City"
                                        name="city"
                                        onChange={HandleChange}
                                        select
                                        fullWidth
                                    >
                                        <MenuItem key={1} value="New Delhi">
                                            New Delhi
                                        </MenuItem>
                                        <MenuItem key={2} value="Mumbai">
                                            Mumbai
                                        </MenuItem>
                                        <MenuItem key={3} value="Lucknow">
                                            Lucknow
                                        </MenuItem>
                                    </TextField>
                                </div>
                            </div>
                            <div className='state'>
                                <div className="labelitem">
                                    Postal Code
                                </div>
                                <div>
                                    <TextField
                                        type="text"
                                        variant='outlined'
                                        name="postal"
                                        onChange={HandleChange}
                                        color='secondary'
                                        label="Postal Code"
                                        fullWidth
                                        sx={{ mb: 4 }}
                                    />
                                </div>
                            </div>
                        </Stack>
                        <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
                            <div className='mail'>
                                <div className="labelitem">
                                    Email
                                </div>
                                <div>
                                    <TextField
                                        type="email"
                                        variant='outlined'
                                        name="email"
                                        color='secondary'
                                        label="Enter Email"
                                        className='deptname'
                                        onChange={HandleChange}
                                        fullWidth
                                    />
                                </div>
                            </div>
                            <div className='mail'>
                                <div className="labelitem">
                                    Password
                                </div>
                                <div>
                                    <TextField
                                        type="password"
                                        name="pass"
                                        variant='outlined'
                                        color='secondary'
                                        label="********"
                                        fullWidth
                                    />
                                </div>
                            </div>
                        </Stack>
                        <div className="labelitem">Address</div>
                        <TextField
                            type="text"
                            onChange={HandleChange}
                            variant='outlined'
                            color='secondary'
                            label="Address"
                            name="address"
                            fullWidth
                            sx={{ mb: 4 }}
                            inputProps={{
                                style: {
                                    height: '5.625rem',
                                    padding: '0 14px',
                                },
                            }}
                        />
                    </div>
                    <Button onClick={() => navigate("/")} variant="outlined" color="primary" type="submit" sx={{
                        borderRadius: "0.625rem",
                        border: '1px solid #015BC4',
                        boxShadow: '0px 6px 26px 0px rgba(35, 80, 139, 0.15)',
                        width: '8rem',
                        height: '3rem',
                        marginLeft: '2.5rem',
                    }}
                    >Cancel</Button>
                    <Button onClick={submitHandler} variant="contained" color="primary" type="submit" sx={{
                        borderRadius: "0.625rem",
                        width: '12rem',
                        height: '3rem',
                        marginLeft: '2rem'
                    }}
                    >Add Department</Button>
                </form>
            </div>
        </div>
    )
}

export default AddDepartment