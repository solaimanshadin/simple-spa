import React from 'react';
import { useParams } from 'react-router-dom';
import works from '../../fakeData/works.json';

const WorkDetail = () => {
    const { name, id } = useParams();

    const specificWork =  works.find(w => w.id == id );
    console.log(specificWork)

    return (
        <div className="container my-5">
            
            <h1>Name : {name}</h1>
            <p>Id : {id} </p>
            <img className="img-fluid" src={specificWork.image} alt=""/>
        </div>
    );
};

export default WorkDetail;