"use client";

import { useState } from "react";

export default function NewItem() {
    // Declare variables
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [category, setCategory] = useState('Produce');
  
    // Form submission
    const handleSubmit = (event) => {
      event.preventDefault(); // Prevent the form's default submission behavior
  
      // Creating an item object with the current values of name, quantity, and category
      const item = {
        name: name,
        quantity: quantity,
        category: category
      };
  
      // Log the item object to the  (displayed in alert)
      console.log(item);
  
      // Display an alert with the current state of name quantity, and category
      alert(`Name: ${name} \nQuantity: ${quantity} \nCategory: ${category}`);
  
      // Reset state variables to their initial values after Submit button is clicked
      setName('');
      setQuantity('');
      setCategory('Produce');
    };
  
    return (
      <form className="flex-auto w-64 bg-slate-900" onSubmit={handleSubmit}>
        {/* Name */} 
        <label>
          Name:
          <input className="text-black mt-2 rounded border-4 border-double border-amber-400 p-1"
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            placeholder="Item name"
            required 
            
          />
        </label>
        <br />
  
        {/* Quantity */}
        <label>
          Quantity:
          <input className="text-black mt-2 ml-2 rounded border-4 border-double border-amber-400 p-1"
            type="number" 
            value={quantity} 
            onChange={(e) => setQuantity(parseInt(e.target.value))} 
            placeholder="1-99"
            min="1" 
            max="99" 
            required 
          />
        </label>
        <br />
  
        {/* Category */}
        <label>
          Category:
          <select className="text-black mt-2 ml-2 rounded border-4 border-double border-amber-400 p-1" value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="Produce">Produce</option>
            <option value="Dairy">Dairy</option>
            <option value="Bakery">Bakery</option>
            <option value="Meat">Meat</option>
            <option value="Frozen Foods">Frozen Foods</option>
            <option value="Canned Goods">Canned Goods</option>
            <option value="Dry Goods">Dry Goods</option>
            <option value="Beverages">Beverages</option>
            <option value="Snacks">Snacks</option>
            <option value="Household">Household</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <br />
  
        {/* Submit Button */}
        <button className="border-4 border-double border-amber-400 p-2 mt-2 mb-2 rounded hover:bg-amber-600" type="submit">Submit</button>
      </form>
    );
}

