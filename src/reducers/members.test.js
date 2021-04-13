import reducer from './members';

describe('members', () => {
  it('returns the initial state', () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it('handles ADD', () => {
    expect(
      reducer([], {
        type: 'ADD',
        member: {
          id: 0,
          name: 'test1',
        },
      }),
    ).toEqual([
      {
        id: 0,
        name: 'test1',
      },
    ]);

    expect(
      reducer(
        [
          {
            id: 0,
            name: 'test1',
          },
        ],
        {
          type: 'ADD',
          member: {
            id: 1,
            name: 'test2',
          },
        },
      ),
    ).toEqual([
      {
        id: 0,
        name: 'test1',
      },
      {
        id: 1,
        name: 'test2',
      },
    ]);
  });

  it('handles REMOVE', () => {
    expect(
      reducer([
        {
          id: 0,
          name: 'test1',
        },
        {
          id: 1,
          name: 'test2',
        },
      ], {
        type: 'REMOVE',
        id: 0,
      }),
    ).toEqual([
      {
        id: 1,
        name: 'test2',
      },
    ]);

    expect(
      reducer(
        [
          {
            id: 0,
            name: 'test2',
          },
        ],
        {
          type: 'REMOVE',
          id: 0,
        },
      ),
    ).toEqual([]);
  });

  it('handles EDIT', () => {
    expect(
      reducer([
        {
          id: 0,
          name: 'test1',
        },
        {
          id: 1,
          name: 'test2',
        },
      ], {
        type: 'EDIT',
        id: 1,
        member: {
          id: 1,
          name: 'test2-edited',
        },
      }),
    ).toEqual([
      {
        id: 0,
        name: 'test1',
      },
      {
        id: 1,
        name: 'test2-edited',
      },
    ]);
  });

  it('handles unknown type', () => {
    expect(
      reducer([
        {
          id: 0,
          name: 'test1',
        },
        {
          id: 1,
          name: 'test2',
        },
      ], {
        type: 'Blah',
        id: 1,
      }),
    ).toEqual([
      {
        id: 0,
        name: 'test1',
      },
      {
        id: 1,
        name: 'test2',
      },
    ]);
  });
});
