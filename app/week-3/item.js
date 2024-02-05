
const Item = ({ name, quantity, category }) => {
    return (
      <li className="bg-amber-500 p-2 m-2 rounded-lg">
        <h3 className="text-x1 font-bold">{name}</h3>
        <p className="text-white">Quantity: {quantity}</p>
        <p className="text-white">Category: {category}</p>
      </li>
      
    );
  };
  
  
  export default Item;
