const members = (state = [], action) => {
  switch(action.type) {
    case 'ADD':
      state.push(action.member);
      return state;
    default:
      return state;
  };
};

export default members;
