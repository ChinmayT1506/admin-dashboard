import React, { useEffect, useState } from 'react'
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';

function BasicTable() {

    const [database, setDatabase] = useState([]);
    useEffect(() => {
        (async function () {
            try {
                const response = await axios.get(
                    "https://dummyjson.com/users/?search=john"
                )
                setDatabase(response.data.users)
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    const newDB = database.slice(0, 50)
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 6;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = newDB.slice(firstIndex, lastIndex);
    const npage = Math.ceil(newDB.length / recordsPerPage)
    const numbers = [...Array(npage + 1).keys()].slice(1)

    function prevPage() {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1);
        }
    }

    function changeCurrentPage(id) {
        setCurrentPage(id);
    }

    function nextPage() {
        if (currentPage !== npage) {
            setCurrentPage(currentPage + 1);
        }
    }

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        records.map((item, index) => (
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.firstName} {item.lastName}</td>
                                <td>{item.age}</td>
                                <td>{item.gender}</td>
                                <td style={{cursor: 'pointer'}}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M21.25 9.15018C18.94 5.52017 15.56 3.43018 12 3.43018C10.22 3.43018 8.49 3.95018 6.91 4.92018C5.33 5.90018 3.91 7.33017 2.75 9.15018C1.75 10.7202 1.75 13.2702 2.75 14.8402C5.06 18.4802 8.44 20.5602 12 20.5602C13.78 20.5602 15.51 20.0402 17.09 19.0702C18.67 18.0902 20.09 16.6602 21.25 14.8402C22.25 13.2802 22.25 10.7202 21.25 9.15018ZM12 16.0402C9.76 16.0402 7.96 14.2302 7.96 12.0002C7.96 9.77018 9.76 7.96018 12 7.96018C14.24 7.96018 16.04 9.77018 16.04 12.0002C16.04 14.2302 14.24 16.0402 12 16.0402Z" fill="black" />
                                    <path d="M12 9.14014C10.43 9.14014 9.15002 10.4201 9.15002 12.0001C9.15002 13.5701 10.43 14.8501 12 14.8501C13.57 14.8501 14.86 13.5701 14.86 12.0001C14.86 10.4301 13.57 9.14014 12 9.14014Z" fill="black" />
                                </svg></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <nav className='paginationBox'>
                <ul className='pagination'>
                    <li className='page-item'>
                        <a href="#" className='page-link' onClick={prevPage}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M16.1599 7.41L11.5799 12L16.1599 16.59L14.7499 18L8.74991 12L14.7499 6L16.1599 7.41Z" fill="#667280" />
                        </svg></a>
                    </li>
                    {
                        numbers.map((n, i) => (
                            <li className={`page-link ${currentPage === n ? "active" : ""}`} key={i}>
                                <a href='#' className='page-item' onClick={() => changeCurrentPage(n)}>{n}</a>
                            </li>
                        ))
                    }
                    <li className='page-item'>
                        <a href="#" className='page-link' onClick={nextPage}><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.91946 0.175421C3.1624 -0.0584297 3.55572 -0.0584297 3.79805 0.175421L8.93599 5.13333C9.42127 5.60162 9.42127 6.36133 8.93599 6.82962L3.76077 11.8244C3.52031 12.0559 3.13196 12.059 2.88839 11.8306C2.63985 11.5974 2.63675 11.2129 2.88156 10.976L7.61811 6.40569C7.86105 6.17125 7.86105 5.7917 7.61811 5.55726L2.91946 1.02327C2.67651 0.789422 2.67651 0.409265 2.91946 0.175421Z" fill="#667280" />
                        </svg></a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default BasicTable