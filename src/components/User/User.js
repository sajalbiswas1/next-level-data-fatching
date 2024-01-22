"use client";
import React, { useEffect, useState } from 'react';

const UserPage = () => {
    const [user,setUser]=useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => setUser(data))
    },[])
    return (
        <div>
            <h1 className='text-3xl font-bold text-center mt-10'>User Page: {user.length}</h1>
            {
                user.map(use => <div key={use.id} className="card w-[70%] mx-auto my-5 bg-gray-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{use.name}</h2>
                    <p>Email:{use.email}</p>
                </div>
            </div>)
            }
        </div>
    );
};

export default UserPage;