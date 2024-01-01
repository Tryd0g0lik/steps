import { render, screen } from '@testing-library/react';
import InputFC from "../../src/frontend/components/Counter/Inputs.tsx";

describe('Component <InputFC/>:', () => {
  test('it only render', () => {
    render(<InputFC inputId={'-' + "distance"} header={"Пройдено км."} inputType={"number"} inputName={"distanc"} />);

    expect(screen.getByText('Пройдено км. ')).toBeInTheDocument();
  })
});
