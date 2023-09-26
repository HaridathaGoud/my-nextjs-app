'use client'

import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from "next/navigation";


const StdviewCompo = () => {

    const params = useParams();
    const [formData, setFormData] = useState()
    const [errors, setError] = useState();
    const para = useRouter();

    useEffect(() => {
        if (params.stdid) {
            // Fetch student data based on the ID using Axios
            const apiurl = `http://localhost:3000/data/${params.stdid}`;

            axios
                .get(apiurl) // Use Axios GET request
                .then((response) => {
                    setFormData(response.data);
                    console.log(response.data);
                })
                .catch((err) => {
                    setError(err.message);
                });
        }
    }, []);

// const Navigation=(e)=>{
//      router.push('/stdtable')
// }

    return (<>

        <h2>Student-View</h2>
        <form >
            <div>
                <label>
                    Id:{formData?.id}            
                </label><br/>
                <label>
                    Name:{formData?.name}            
                </label><br/>
                <label>
                    Age:{formData?.age}            
                </label><br/>
                </div>
        </form>

            Button tag :<button onClick={()=>para.push("/stdtable")}>Back to table</button><br/>

            Link Tag :  <Link href={'/stdtable'}>Back to table</Link>

                 <p> {errors} </p> 
    </>)}

export default StdviewCompo