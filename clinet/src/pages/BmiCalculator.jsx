import React, { Component, useState } from "react";




function  BmiCalculatro (){
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBMI] = useState(null);
    
  
    const calcBMI = () => {
      if (weight && height) {
        const weightInKg = parseFloat(weight);
        const heightInM = parseFloat(height) / 100; // Convert height to meters
        const bmiValue = (weightInKg / (heightInM * heightInM)).toFixed(2);
        setBMI(bmiValue);
      }
    };
   
    

   const reldofield =()=>{
    setBMI(null)
    setHeight('')
    setWeight('')
   }
   const getBMIStatus = (bmiValue) => {
    if (bmiValue < 18.5) {
      return "Underweight";
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      return "Normal Weight";
    } else {
      return "Overweight";
    }
  };

   
   

   return(

    <div className="conteiner">
        <h1 className="heading">BMI Calculator</h1>
        <p className="weightinput">Weight (kg)</p>
        <input
        name="weight"
        value={weight}
        className="weight"
        type="number"
        onChange={(e) => setWeight(e.target.value)}
      />
        
        
        
        <p className="heightinput">Height(m)</p>
        <input
        name="height"
        className="height"
        value={height}
        type="number"
        onChange={(e) => setHeight(e.target.value)}
      />
        <button className="submit" onClick={calcBMI}>Submit</button>
        <button className="reload" onClick={reldofield}>Reload</button>

        {bmi !== null && (
        <div>
          <p className="score">Your BMI is: {bmi}</p>
          <p className="status">You are: {getBMIStatus(parseFloat(bmi))} {/* Add BMI status here */}</p>
        </div>
      )}
             
        
      
        



    </div>
   )
}
export default BmiCalculatro 