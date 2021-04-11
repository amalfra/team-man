import addAction from './add';

describe('add', () => {
  it('creates an action', () => {
    const member = {
      name: 'test',
    };
    const expectedAction = {
      type: 'ADD',
      member,
    };

    expect(addAction(member)).toEqual(expectedAction);
  });
});
