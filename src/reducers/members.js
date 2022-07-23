// eslint-disable-next-line default-param-last
const members = (state = [], action) => {
  const newState = [...state];

  switch (action.type) {
    case 'ADD':
      newState.push(action.member);
      return newState;
    case 'REMOVE':
      newState.splice(action.id, 1);
      return newState;
    case 'EDIT':
      newState[action.id] = action.member;
      return newState;
    default:
      return newState;
  }
};

export default members;
