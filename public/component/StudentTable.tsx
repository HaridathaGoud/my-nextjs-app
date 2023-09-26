'use client'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const StudentTable = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [selectdId, setSelectedId] = useState();
    const navigation = useRouter();

    useEffect(() => {
        const apiurl = 'http://localhost:3000/data';

        fetch(apiurl)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network issue, please check');
                }
                return response.json();
            })
            .then((response) => {
                //debugger
                if (Array.isArray(response)) {
                    setData(response);
                }
                else if (response && response.data && Array.isArray(response.data)) {
                    setData(response.data);
                }
                else {
                    setError('Unable to fetch the data');
                }
            })
            .catch((err) => {
                setError(err.message);
            });
    }, []);
    console.log(data);

    const DeleteStd = async () => {
        try {

            const res = await axios.delete('http://localhost:3000/data',selectdId)
            console.log('deleted record ' + res);
        } catch (err) {
            console.log('not deleted ', err)
        }
    }

    const ViewData = (id) => {
        navigation.push(`/stdform/${id}`);
    }



    return (
        <>

            <div>StudentTable</div>
            {error ? (
                <p>{error}</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item, index) =>
                                <tr key={index} onClick={() => setSelectedId(item.id)} style={item.id == selectdId ? { color: 'red' } : {}}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.age}</td>
                                    <td>
                                        <button onClick={() => ViewData(item.id)} style={{ marginRight: "8px" }}>View</button>
                                        <button onClick={() => DeleteStd()}>Delete</button>
                                    </td>
                                </tr>
                            )}
                    </tbody>
                </table>
            )}

        </>
    );
};

export default StudentTable;
