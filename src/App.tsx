import React from "react";
import CounterFC from "./components/Counter/Counter";
import TrainFC from "./components/Training/Train";
import "./App.css";

export default function AppFC(): React.JSX.Element {
  return (
    <>
      <CounterFC />
      <TrainFC />
    </>
  );
}
