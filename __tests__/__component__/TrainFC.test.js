import React from "react";
// var { createRoot } = require('react-dom/client');
const Pulisher = require('../../src/frontend/steps/piblisher-data/index.ts');
import ListRecords from "../../src/frontend/components/Records";
import { render, screen } from "@testing-library/react";

import 'jest-localstorage-mock';
import '@testing-library/jest-dom';

// const jsdom = require("jsdom");
import { TextEncoder } from 'util';

// if (global.TextEncoder === undefined) {
const encoder = new TextEncoder();
const uint8array = encoder.encode('utf - 8');
global.TextEncoder = uint8array;
// }
import { jsdom, JSDOM } from "jsdom";
// if (global.TextDecoder === undefined) {
//   global.TextDecoder = TextDecoder;
// }
const resourceLoader = {
  pretendToBeVisual: true,
  url: "http://localhost",
  referrer: "http://localhost",
  contentType: "text/html",
  includeNodeLocations: true,
  storageQuota: 10000000

}



const ls = { "date-0e70546c-4440-42c7-a0aa-58d3ba3c4176": { "date": "2023-01-01", "distance": "1" } };


function TrainFC() {
  const publisher = new Pulisher()
  const resp = publisher.dataGetForPublish;
  return (
    <div className="feature">
      <ul className="head">
        <li>Дата (ДД.ММ.ГГ)</li>
        <li>Пройдено км 🐾</li>
        <li>Действия</li>
      </ul>

      <div className="contentBlock">
        <ListRecords obj={resp} />
      </div>
    </div>
  );
};

describe('Component <TrainFC />:', () => {


  test('it render', () => {
    const dom = new JSDOM(`<!DOCTYPE html><html><body><div id="root"></div></body></html>`, resourceLoader);
    const document = dom.window.document;
    // beforeEach(() => {
    //   localStorage.clear();
    // });
    localStorage.setItem('heandlersData', JSON.stringify(ls));
    const div_ = document.querySelector('div');
    // const root = createRoot(dom);
    // div.innerHTML = renderToStaticMarkup(<TrainFC />);
    const { container } = render(<TrainFC />, div_);
    // expect(div.querySelector('[ul.className="content"]')).toBeInTheDocument()
    expect(screen.getByLabelText('Пройдено')).toBeInTheDocument()
  });
})
