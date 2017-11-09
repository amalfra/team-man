export const edit = (id, m) => {
  return {
    type: 'EDIT',
    id: id,
    member: m
  }
};
