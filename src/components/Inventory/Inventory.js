import React, { useState } from 'react';
import BreakfastData from '../../breakfastlData/breakfastData';
import LunchData from '../../lunchData/lunchData';
import DinnerData from '../../dinnerData/dinnerData';

const Inventory = () => {

    const handleAddBreakfast = () => {

        fetch('http://localhost:4242/addBreakfast', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(BreakfastData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }

    const handleAddLunch = () => {

        fetch('http://localhost:4242/addLunch', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(LunchData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }
    
    const handleAddDinner = () => {

        fetch('http://localhost:4242/addDinner', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(DinnerData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }

    return (
        <div>
            inventory cooming sooooooon

            <button onClick={handleAddBreakfast}>Add Breakfast</button>
            <button onClick={handleAddLunch}>Add Lunch</button>
            <button onClick={handleAddDinner}>Add Dinner</button>
        </div>
    );
};

export default Inventory;