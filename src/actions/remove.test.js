import removeAction from './remove';

describe('remove', () => {
  it('creates an action', () => {
    const id = 3;
    const expectedAction = {
      type: 'REMOVE',
      id,
    };

    expect(removeAction(id)).toEqual(expectedAction);
  });
});
