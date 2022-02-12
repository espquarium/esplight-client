import React from "react";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { ILightTime } from "../typings/EspLight";
import Card from "./Card";
import Divisor from "./Divisor";
import FullScreenModal, { Button, Header, Input } from "./FullScreenModal";
import moment from "moment";

const AddTime: React.FC<{
  toggle: CallableFunction;
  times: ILightTime[];
  editTimes: CallableFunction;
}> = ({ toggle, times, editTimes }) => {
  const [date, setDate] = useState<Date | null>();

  const save = () => {
    if (date) {
      const tTimes = [...times];

      const momentDate = moment(date);

      tTimes.push({
        h: momentDate.get("hours"),
        m: momentDate.get("minutes"),
        c: [0, 0, 0, 0],
      });

      tTimes.sort((a, b) => a.h - b.h || a.m - b.m);

      editTimes(tTimes);

      toggle();
    }
  };

  return (
    <FullScreenModal>
      <Header>
        <h1>Add new Time</h1>
        <AiOutlineClose color="black" size={20} onClick={() => toggle()} />
      </Header>

      <Card>
        <label htmlFor="time">Time</label>
        <Divisor />
        <Input
          type="time"
          id="time"
          name="time"
          min="00:00"
          max="23:59"
          required
          onChange={({ target }) => setDate(target.valueAsDate)}
        />
        <Divisor />
        <Button onClick={() => save()}>Add</Button>
      </Card>
    </FullScreenModal>
  );
};

export default AddTime;
