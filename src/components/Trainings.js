import React, { useState } from 'react'


export default function Trainings({trainigs, setTrainings}) {
    const edit = '🖉'
    const delet = '✗'
    const handleRemove = id => {
        setTrainings(prevTrains => prevTrains.filter( o => o.id !== id))
    }
    
    return (
        <div className="feature">
            <ul className="head">
                <li>Дата (ДД.ММ.ГГ)</li>
                <li>Пройдено км 🐾</li>
                <li>Действия</li>
            </ul>
            
            <div className="contentBlock">
                {trainigs.map(o => <ul className="content" key={o.id}>
                    <li>{o.date}</li>
                    <li>{o.distanc}</li>
                    <li><button>{edit}</button> 
                    <button onClick={() => handleRemove(o.id)}>{delet}</button> </li>
                </ul>)}
            </div>
        </div>    
    )
}