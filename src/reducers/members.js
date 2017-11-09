const members = (state = [], action) => {
  switch(action.type) {
    case 'ADD':
      state.push(action.member);
      return state;
    case 'REMOVE':
      state.splice(action.id, 1);
      return state;
    default:
      return state;
  };
};

export default members;
