import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import InputFC from "../../src/frontend/components/Counter/Inputs.tsx";
import ButtonFC from "../../src/frontend/components/Buttons.tsx";

import TrainFC from "../../src/frontend/components/Training/Train.tsx";

// import CounterFC from "../../src/frontend/components/Counter/Counter.tsx";
const ls = { "date-0e70546c-4440-42c7-a0aa-58d3ba3c4176": { "date": "2023-01-01", "distance": "1" } }
import 'jest-localstorage-mock';
// const { LocalStorage } = require('node-localstorage');


// const responce = describe.each([
//   ['InputFC', <InputFC inputId={'01' + "date"} header={"Дата (ДД.ММ.ГГ)"} inputType={"date"} inputName={"dates"} />],
//   ['ButtonFC', <ButtonFC header={"Ok"} />],
//   ['TrainFC', <TrainFC />],
//   // ['CounterFC', <CounterFC />]
// ])

// responce('There is testing App components .add(%s)', (a, b) => {
describe.only('my beverage', () => {
  test('App component  ', () => {

    // const localStorage = new LocalStorage('heandlersData');
    localStorage.setItem("heandlersData", '{ "date": "2023-01-01", "distance": "1" }');
    // render(b)
    expect(localStorage.getItem('heandlersData')).toBe('{ "date": "2023-01-01", "distance": "1" }');
  }
  );
})
