const Item = ({ name, quantity, category, onSelect }) => { // Updated component definition to accept onSelect prop
  return (
      <li style={{ width: '300%' }} className="flex-auto bg-amber-400 p-2 m-2 rounded-lg cursor-pointer" onClick={() => onSelect(name)}> {/* Added onClick handler */}
          <h3 className="text-x1 font-bold">{name}</h3>
          <p className="text-white">Quantity: {quantity}</p>
          <p className="text-white">Category: {category}</p>
      </li>
  );
};

export default Item;
