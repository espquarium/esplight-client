import React from "react";
import { ILightTime } from "../typings/EspLight";
import format from "date-fns/format";

const TimesTable: React.FC<{ times: ILightTime[] }> = ({ times }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Time</th>
          <th>CH1</th>
          <th>CH2</th>
          <th>CH3</th>
          <th>CH4</th>
        </tr>
      </thead>
      <tbody>
        {times.map((t) => {
          const day = new Date();
          day.setHours(t.h);
          day.setMinutes(t.m);

          return (
            <tr>
              <td>{format(day, "HH:mm")}</td>
              <td>{t.c[0]}</td>
              <td>{t.c[1]}</td>
              <td>{t.c[2]}</td>
              <td>{t.c[3]}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TimesTable;
