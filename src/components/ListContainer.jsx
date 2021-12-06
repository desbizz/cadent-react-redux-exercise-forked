import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  addItem,
  removeItem,
  selectItem,
  deselectItem,
  addClickedItem,
} from '../ducks/groceries';

import ListInputs from './ListInputs';
import ListSelection from './ListSelection';
import ListTable from './ListTable';

const mapStateToProps = ({
  groceries: {
    list: groceryList,
    isItemSelected: isSelected,
    selectedItem,
    clickedItems,
  },
}) => ({
  groceryList,
  isSelected,
  selectedItem,
  clickedItems,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      removeItem,
      selectItem,
      deselectItem,
      addItem,
      addClickedItem,
    },
    dispatch
  );

class ListContainer extends Component {
  componentWillMount() {
    /* eslint-disable no-console */
    console.log('groceryList Mounted', this.props.groceryList, this);
  }

  componentWillReceiveProps(nextProps) {
    console.log('groceryList', nextProps.groceryList, this);
  }

  render() {
    console.log('sasaas', this.props);
    let {
      groceryList,
      addItem,
      isSelected,
      selectItem,
      deselectItem,
      removeItem,
      selectedItem,
      clickedItems,
      addClickedItem,
    } = this.props;
    return (
      <section className="groceryApp">
        <div className="listInputs">
          <ListInputs addItem={addItem} />
        </div>
        <div className="types">
          <ListSelection clickedItems={clickedItems} />
          <ListTable
            groceryList={groceryList}
            removeItem={removeItem}
            isSelected={isSelected}
            addClickedItem={addClickedItem}
            selectedItem={selectedItem}
            selectItem={selectItem}
            deselectItem={deselectItem}
          />
        </div>
      </section>
    );
  }
}

ListContainer.propTypes = {
  // Props
  // Actions
  addItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  selectItem: PropTypes.func.isRequired,
  deselectItem: PropTypes.func.isRequired,
  // Store
  groceryList: PropTypes.array.isRequired,
  // Other
};

const ListContainerRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListContainer);

export default ListContainerRedux;
