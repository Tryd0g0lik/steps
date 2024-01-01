import React from 'react';
import { render, screen } from '@testing-library/react';
import ButtonFC from "../../src/frontend/components/Buttons.tsx";


describe('Component <ButtonFC/>:', () => {
  test('it render', () => {
    const { container } = render(<ButtonFC header={'OK'} />);
    expect(container.querySelector('[type="submit"]')).toBeInTheDocument();
  });
})
