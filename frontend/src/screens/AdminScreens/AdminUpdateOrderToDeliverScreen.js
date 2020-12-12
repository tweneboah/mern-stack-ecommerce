import React from 'react';
import { useDispatch } from 'react-redux';
import { updateTodeliverOrderAction } from '../../redux/actions/orderActions';

const AdminUpdateOrderToDeliverScreen = ({ match }) => {
  console.log(match.params.id);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>update to deliver {match.params.id}</h1>
      <button
        onClick={() => dispatch(updateTodeliverOrderAction(match.params.id))}>
        Update to deliver
      </button>
    </div>
  );
};

export default AdminUpdateOrderToDeliverScreen;
