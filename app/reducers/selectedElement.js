const selectedElement = (state = null, action ) => {
  switch (action.type) {
    case 'SELECT_ELEMENT':
      return action.id;
    default:
      return state;
  }
}

export const getSelectedElement = (state) => state;
export default selectedElement;
