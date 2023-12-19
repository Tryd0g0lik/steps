import React from "react";

export default function CounterFC() {
  return (
    // <form className="form" onSubmit={handleSubmit}></form>
    <form className="form" >
      <div className="menu">
        <div className="block">
          <h2>Дата (ДД.ММ.ГГ)</h2>
          <div className="interiorBlock">
            {/* <input name="date" type="date" value={form.date} onChange={handleChange} required /> */}
            <input name="date" type="date" required />
          </div>
        </div>
        <div className="block">
          <h2>Пройдено км</h2>
          <div className="interiorBlock">
            {/* <input name="distanc" type="number" value={form.distanc} onChange={handleChange} required /> */}
            <input name="distanc" type="number" required />
          </div>
        </div>
        <div className="blockOk">
          <button className="ok">
            <h2>OK</h2>
          </button>
        </div>
      </div>
    </form>
  )
}
