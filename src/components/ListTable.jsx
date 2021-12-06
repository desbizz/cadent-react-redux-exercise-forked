import React from 'react';

import PropTypes from 'prop-types';


export const ListTable = ({
  groceryList,
  selectedItem,
  isSelected,
  removeItem,
  selectItem,
  deselectItem,
  addClickedItem
}) => {
  const select_Item = (val) => {
    selectItem(val);
  };
  const itemClicked = (val)=>{
   addClickedItem(val)
  }
  const deselect_Item = () => {
    let item = {
      id: 0,
      name: '',
      category: '',
      deliveryMethod: '',
    };
    deselectItem(item)
  };
  const remove_Item = (id) => {
    let items = groceryList.filter((val) => {
      return val.id !== id;
    });
    removeItem(items);
  };
 
  return (
    <div className="listTable">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Delivery Method</th>
            <th>Select</th>
            <th>Deselect</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {groceryList.map((val) => (
            <tr style={val.id === selectedItem.id ? {backgroundColor:'blue'}:{}} key={val.id} onClick={()=>itemClicked(val)}>
              <td>{val.id}</td>
              <td>{val.name}</td>
              <td>{val.category}</td>
              <td>{val.deliveryMethod}</td>
              <td>
                <button onClick={() => select_Item(val)}>Select</button>
              </td>
              <td>
                <button onClick={() => deselect_Item(val.id)}>Deselect</button>
              </td>
              <td>
                <button onClick={() => remove_Item(val.id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

ListTable.propTypes = {
  removeItem: PropTypes.func.isRequired,
};

export default ListTable;
