import React from "react";
// var { createRoot } = require('react-dom/client');
const Publisher = require('../../src/frontend/steps/publisher-data/index.ts');
import ListRecords from "../../src/frontend/components/Records";
import { waitFor, render, queryByText, screen } from "@testing-library/react";

import 'jest-localstorage-mock';
import '@testing-library/jest-dom';

// import { TextEncoder } from 'util';

import { jsdom, JSDOM } from "jsdom";
const ls = { "date-0e70546c-4440-42c7-a0aa-58d3ba3c4176": { "date": "2023-01-01", "distance": "1" } };

function TrainFC() {
  const publisher = new Publisher()
  const resp = publisher.dataGetForPublish;
  return (
    <div className="feature">
      <ul className="head">
        <li>Дата (ДД.ММ.ГГ)</li>
        <li>Пройдено км 🐾</li>
        <li data-testid="field">Действия</li>
      </ul>

      <div className="contentBlock">
        <ListRecords obj={resp} />
      </div>
    </div>
  );
};

describe('Component <TrainFC />:', () => {
  let dom = undefined;

  beforeEach(() => {
    dom = new JSDOM(`<!DOCTYPE html><html><body data-testid="parent"></body></html>`);

    global.document = dom.window.document;
    global.window = dom.window;
  });

  test('it visible', async () => {

    localStorage.setItem('heandlersData', JSON.stringify(ls));
    const { queryByTestId, getByTestId, getByText } = await render(<TrainFC />);
    const exp = await getByTestId('field')
    expect(exp).toBeInTheDocument(); //.toContainHTML('Действия')

  });
  test('it visible', async () => {

    localStorage.setItem('heandlersData', JSON.stringify(ls));
    const { queryByTestId, getByTestId, getByText } = await render(<TrainFC />);
    const exp = await getByTestId('field')

    expect(exp).toContainHTML('Действия')
  });
  test('it visible', async () => {
    localStorage.setItem('heandlersData', JSON.stringify(ls));
    const { queryByTestId, getByTestId, getByText } = await render(<TrainFC />);

    expect(getByText('Действия')).toBeVisible();
  });

  test('it content toBeInTheDocument', async () => {
    localStorage.setItem('heandlersData', JSON.stringify(ls));
    const { queryByTestId, getByTestId, getByText } = await render(<TrainFC />);
    const exp = await getByTestId('distance');
    expect(exp).toBeInTheDocument();
    expect(exp).toHaveTextContent('1');
  })

})
