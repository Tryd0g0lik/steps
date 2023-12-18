import React, { useState } from 'react'
import OneTraining from './OneTraining';
import nanoid from 'nanoid';

export default function Form({form, setForm, setTrainings}) {
      
    const handleSubmit = evt => {
        evt.preventDefault()
        console.log(form)
        const train = new OneTraining(nanoid(), form.date, form.distanc)
        console.log(train)
        setTrainings(prevTrains => {
            console.log(prevTrains)
            for(let key of prevTrains) {
                if(key.date === train.date) {
                    key.distanc = Number(train.distanc) + Number(key.distanc) 
                    return prevTrains.sort(sortTrain)
                }
            }
            return [...prevTrains, train].sort(sortTrain);
        })
        setForm({date: '', distanc: ''});
    }

    const sortTrain = (date1, date2) => {
        if (date1.date > date2.date) return 1;
        if (date1.date < date2.date) return -1;
        return 0;
    };

    const handleChange = evt => {
        const {name, value} = evt.target
        setForm(prevForm => ({...prevForm, [name]: value}))
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="menu">
                <div className="block">
                    <h2>Дата (ДД.ММ.ГГ)</h2>
                    <div className="interiorBlock">
                        <input name="date" type="date" value={form.date} onChange={handleChange} required/>
                    </div>
                </div>
                <div className="block">
                    <h2>Пройдено км</h2>
                    <div className="interiorBlock">
                    <input name="distanc" type="number" value={form.distanc} onChange={handleChange} required/>
                    </div>
                </div>
                <div className="blockOk">
                    <button className="ok">
                        <h2>OK</h2>
                    </button>                  
                </div>
            </div>
        </form>
    )
}