export const addRestaurant = (restaurant) => {
  return {
    type: 'ADD_RESTAURANT',
    restaurant
  };
};

<<<<<<< HEAD
=======
const mapDispatchToProps = dispatch => {
  return {
    addRestaurant: (newRestaurant) => {
      dispatch(addRestaurant(newRestaurant))
    }
  };
};

export default connect(null, { addRestaurant })(RestaurantInput);
>>>>>>> e0ffb69a325469bd6e0016826365c6a76054ff3a
