import React, { useEffect } from 'react';
import { useParams } from "react-router";
import './FoodDetails.css';

const FoodDetails = () => {
    const {foodId} = useParams()
    console.log(foodId);
    const [foodDetails, setFoodDetails] = React.useState({});
    console.log(foodDetails);

    useEffect(() => {
        fetch(`http://localhost:4242/breakfastFood/${foodId}`)
        .then(res => res.json())
        .then(data => {
            setFoodDetails(data);
            console.log(data);
        })        
    }, [foodId]);
    
    useEffect(() => {
        fetch(`http://localhost:4242/dinnerFood/${foodId}`)
        .then(res => res.json())
        .then(data => {
            setFoodDetails(data);
            console.log(data);
        })        
    }, [foodId]);
    
    useEffect(() => {
        fetch(`http://localhost:4242/lunchFood/${foodId}`)
        .then(res => res.json())
        .then(data => {
            setFoodDetails(data);
            console.log(data);
        })        
    }, [foodId]);

    return (
        <div className="row">
            <div className="col-md-6">
                <img className="img-fluid" src={foodDetails.foodImg} alt=""/>
                <h3>{foodDetails.foodName}</h3>
                <p>{foodDetails.instructions}</p>
                {
                    foodDetails.ingredients?.map(ingred => (
                        <div>
                            <p>{ingred.ingred_1}</p>
                            <p>{ingred.ingred_2}</p>
                            <p>{ingred.ingred_3}</p>
                            <p>{ingred.ingred_4}</p>
                            <p>{ingred.ingred_5}</p>
                            <p>{ingred.ingred_6}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default FoodDetails;