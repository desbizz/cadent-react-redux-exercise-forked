import React from 'react';

const ListSelection = ({clickedItems}) => (
  <div className="listSelection">
    <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Delivery Method</th>
          </tr>
        </thead>
        <tbody>
          {clickedItems.map((val) => (
            <tr key={val.id} >
              <td>{val.id}</td>
              <td>{val.name}</td>
              <td>{val.category}</td>
              <td>{val.deliveryMethod}</td>
            </tr>
          ))}
        </tbody>
      </table>
  </div>
);

export default ListSelection;
