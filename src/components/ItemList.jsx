// import React from 'react';
// import './ItemList.css';

// const ItemList = ({ items, onDelete, onEdit }) => {
//   return (
//     <ul>
//       {items.map((item) => (
//         <li key={item._id}>
//           <strong>{item.name}</strong>: {item.description}
//           <button onClick={() => onEdit(item)}>Edit</button>
//           <button onClick={() => onDelete(item._id)}>Delete</button>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default ItemList;
import React from 'react';
import './ItemList.css';

const ItemList = ({ items, onDelete, onEdit }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item._id}>
          <strong>{item.itemName}</strong>: {item.description} {/* Updated to item.itemName */}
          <button onClick={() => onEdit(item)}>Edit</button>
          <button onClick={() => onDelete(item._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
