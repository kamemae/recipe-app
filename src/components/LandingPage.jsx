import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { useSearchParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export default function LandingPage() {
    const [searchParams] = useSearchParams();
    const recipeId = searchParams.get('p'); 

    const recipes = JSON.parse(localStorage.getItem("recipes") || "[]");
    const recipe = recipes.find(r => String(r.id) === String(recipeId)); 


    if (!recipe) {
        return (
            <div className="container mt-5 text-center">
                <h1 className="display-4">It doesnt exist bro</h1>
                <p className="lead text-muted">use power of imagination or just add it</p>
            </div>
        );
    }

    return (
        <>
            <div className="container mt-5">
                <Button variant='secondary'><i class="bi bi-pencil-square"/></Button>   
                <section className="row align-items-center mb-5" style={{ maxWidth: "1200px" }}>
                    <div className="col-md-6 text-center text-md-end">
                        <h1 className="display-4">{recipe.title}</h1>
                        <p className="lead text-muted">{recipe.desc}</p>
                    </div>
                    <div className="col-md-6 text-center">
                        <img 
                            src={recipe.image} 
                            className="img-fluid rounded shadow" 
                            style={{ maxWidth:"1024px", minWidth:"256px" }} 
                        />
                    </div>
                </section>

                <section className="row">
                    <div className="col-md-6">
                        <h3 className="mb-3">Ingredients</h3>
                        <ul className="list-group">
                            {recipe.ingredients.map((item, index) => ( <li key={index} className="list-group-item">{item}</li> ))}
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <h3 className="mb-3">Preparation Time</h3>
                        <p className="text-muted">{`approx. ${recipe.time} minutes`}</p>
                        <h4 className="mt-4">Step-by-Step Guide</h4>
                        <p className="text-muted">{recipe.steps}</p>
                    </div>
                </section>
            </div>
        </>

    );
}