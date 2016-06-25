const appState = {
  selectedBoard: null,
  boardsIds: ['b1'],
  boardsById: {
    'b1': {
      id: 'b1',
      currency: '$',
      sources: ['s2', 's3'],
      expenses: [
        {
          id: '4',
          description: 'supermaket food shopping',
          cateogry: 'cat1',
          value: 100
        },
        {
          id: '5',
          description: 'electricity bill',
          category: 'cat2',
          value: 140
        }
      ],

      categories: [
        {
          id: 'cat2',
          name: 'bills'
        },
        {
          id: 'cat2',
          name: 'food'
        }]
    }
  },
  sourcesById: {
    's2':{
      id: 's2',
      name: 'my salary',
      value: 4000
    },
    's3': {
      id: 's3',
      name: 'wife salary',
      value: 4200
    }
  },
}

export default appState;
