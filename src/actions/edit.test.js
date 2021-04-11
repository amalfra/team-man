import editAction from './edit';

describe('edit', () => {
  it('creates an action', () => {
    const id = 3;
    const member = {
      id,
      name: 'test',
    };
    const expectedAction = {
      type: 'EDIT',
      id,
      member,
    };

    expect(editAction(id, member)).toEqual(expectedAction);
  });
});
