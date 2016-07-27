jest.disableAutomock();

import selectedElement, * as fromSelectedElement from '../selectedElement';

describe('selectedElement reducer', () => {
  it('is null by default', () => {
    expect(selectedElement(undefined, {})).toBe(null);
  })

  it('udpate selectedElement', () => {
    const result = selectedElement(null, {
      type: 'SELECT_ELEMENT',
      id: 'e1'
    });

    expect(result).toBe('e1');
    expect(fromSelectedElement.getSelectedElement(result)).toBe('e1');
  })
})
