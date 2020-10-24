import React, {useRef}from 'react';

export const CreateCar = () => {
    const carManufacturer= useRef(); //Márka
    const carModel = useRef(); //Modell
    const carManufacturingDate = useRef(); //Gyártási év
    const carPlateNumber = useRef(); //Rendszám

    const Adding = () => {

    }

    return <form className="CarCreateForm">
        <input type="text" placeholder="Manufacturer" id="manufacturer" ref={carManufacturer}/>
        <input type="text" placeholder="Model" id="model" ref={carModel}/>
        <input type="number" placeholder="Manufacturing date" id="date" ref/>
        <input type="text" placeholder="Plate" id="plate"/>
        
        <button onClick={Adding}></button>
    </form>
}