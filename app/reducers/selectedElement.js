const selectedElement = (state = null, action ) => {
  switch (action.type) {
    case 'SELECT_ELEMENT':
      return action.id;
    default:
      return state;
  }
}

export const getSelectedElementId = (state) => state;
export default selectedElement;
