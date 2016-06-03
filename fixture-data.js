const appState = {
  selectedBoard: null,
  boards: [{
    id: 'b1',
    currency: '$',
    sources: [
      {
        id: '2',
        name: 'my salary',
        value: 4000
      },
      {
        id: '3',
        name: 'wife salary',
        value: 4200
      }
    ],

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
}]}

export default appState;
