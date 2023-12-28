import React from "react";
import CounterFC from "./components/Counter/Counter.tsx";
import TrainFC from "./components/Training/Train.tsx";
import "./App.css";

export default function AppFC(): React.JSX.Element {

  return (
    <>
      <CounterFC />
      <TrainFC />
    </>
  );
}
