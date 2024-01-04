import React from 'react';
import '@testing-library/jest-dom';
import { JSDOM } from "jsdom";
import { render, screen } from '@testing-library/react';
import ButtonFC from "../../src/frontend/components/Buttons.tsx";


describe('Component <ButtonFC/>:', () => {

  let dom = undefined;
  beforeEach(() => {
    dom = new JSDOM(`<!DOCTYPE html><html><body data-testid="parent"></body></html>`);
    global.document = dom.window.document;
    global.window = dom.window;
  });

  test('it visible', async () => {
    const { getByText } = await render(<ButtonFC header={'OK'} />);
    expect(getByText('OK')).toBeVisible();
  });
})
