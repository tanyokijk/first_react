import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function Recipe({ name, components, consistency, photo}) {
  return (
    <div>
      <h2>Recipe: {name}</h2>
      <div>
  <h4>Components:</h4>
  <ul>
    {components.map((component, index) => (
      <li key={index}>
       {component.name} - {component.quantity}
      </li>
    ))}
  </ul>
</div>
      <h4>Consistency: </h4>
      <ol>
    {consistency.map((one_consistency, index) => (
      <li key={index}>
      {one_consistency.text}
      </li>
    ))}
  </ol>
  <img src={photo} alt={name} />

    </div>
  );
}
export default Recipe
