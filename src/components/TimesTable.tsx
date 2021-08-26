import React from "react";
import { ILightTime } from "../typings/EspLight";
import format from "date-fns/format";
import styled from "styled-components";
import COLORS from "../COLORS";
import { IoMdAdd } from "react-icons/io";
import { AiFillCloseCircle } from "react-icons/ai";
import useToggle from "../hooks/useToggle";
import AddTime from "./AddTime";

export const Table = styled.table`
  width: 100%;
  text-align: center;

  /* border-collapse: collapse; */
  margin: 0;
  padding: 0;
  table-layout: fixed;

  caption {
    font-size: 1.5em;
    margin: 0.5em 0 0.75em;
  }

  @media screen and (max-width: 600px) {
    & {
      border: 0;
    }

    & caption {
      font-size: 1.3em;
    }

    & thead {
      border: none;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
    }

    & tr {
      border-bottom: 3px solid #ddd;
      display: block;
      margin-bottom: 0.625em;
      margin: 5px;
      padding: 10px;
      background-color: white;
      border-radius: 10px;
    }

    & td {
      border-bottom: 1px solid #ddd;
      display: block;
      font-size: 0.8em;
      text-align: right;
    }

    & td::before {
      /*
    * aria-label has no advantage, it won't be read inside a table
    content: attr(aria-label);
    */
      content: attr(data-label);
      float: left;
      font-weight: bold;
      text-transform: uppercase;
    }

    & td:last-child {
      border-bottom: 0;
    }

    input {
      text-align: right;
    }
  }
`;

export const THead = styled.thead`
  background-color: ${COLORS.navbar};
  color: white;
`;

export const TFoot = styled.tfoot`
  // custom css goes here
`;

export const TBody = styled.tbody`
  // custom css goes here
`;

export const TR = styled.tr`
  @media screen and (min-width: 600px) {
    :nth-child(even) {
      background-color: #f2f2f2;
    }
  }
`;

export const TH = styled.th`
  // custom css goes here
`;

export const TD = styled.td``;

export const FloatingButton = styled.div`
  right: 20px;
  bottom: 20px;
  position: fixed;

  padding: 15px;
  background-color: ${COLORS.primary};
  border-radius: 50%;

  box-shadow: 5px 5px 15px -5px rgba(0, 0, 0, 0.34);

  cursor: pointer;

  :hover {
    transform: scale(1.05);
  }
`;

const InputTable = styled.input`
  background-color: inherit;
  display: table-cell;
  /* width: 100%; */
  /* padding: 10px; */
  border: none;
  text-align: center;
  /* margin: 0px; */
  :focus {
    /* width: 100%; */
    outline: -webkit-focus-ring-color auto 1px;
  }
`;

const TimesTable: React.FC<{
  times: ILightTime[];
  editTimes: CallableFunction;
}> = ({ times, editTimes }) => {
  const [addModal, toggle] = useToggle(false);

  const editChannel = (value: string, i: number, chi: 0 | 1 | 2 | 3) => {
    const numberPattern = /\d+/g;
    value = value.match(numberPattern)?.join("") || "0";
    console.log(value);
    const tTimes = [...times];
    tTimes[i].c[chi] = parseInt(value);
    editTimes(tTimes);
  };

  const editTime = (day: Date | null, i: number) => {
    if (day) {
      const offSet = day.getTimezoneOffset() / 60;
      const tTimes = [...times];
      tTimes[i].h = day.getUTCHours() + offSet;
      tTimes[i].m = day.getUTCMinutes();
      editTimes(tTimes);
    }
  };

  const confirmDelete = (label: string, i: number) => {
    const confirm = window.confirm(`confirm delete of time ${label}?`);

    if (confirm) {
      const tTimes = [...times];
      tTimes.splice(i, 1);
      editTimes(tTimes);
    }
  };

  return (
    <>
      {addModal && (
        <AddTime times={times} toggle={toggle} editTimes={editTimes} />
      )}

      <FloatingButton onClick={() => toggle()}>
        <IoMdAdd color="white" />
      </FloatingButton>
      <Table>
        <caption>Light Times</caption>
        <THead>
          <TR>
            <th scope="col">Time</th>
            <th scope="col">CH1</th>
            <th scope="col">CH2</th>
            <th scope="col">CH3</th>
            <th scope="col">CH4</th>
            <th scope="col"></th>
          </TR>
        </THead>
        <TBody>
          {times.map((t, i) => {
            const day = new Date();
            day.setUTCHours(t.h);
            day.setUTCMinutes(t.m);

            const hours = day.getHours();
            const minutes = day.getMinutes();

            const label = `${hours < 10 ? "0" : ""}${hours}:${
              minutes < 10 ? "0" : ""
            }${minutes}`;

            return (
              <TR>
                <TD data-label="Time" scope="row">
                  <InputTable
                    type="time"
                    value={label}
                    onChange={({ target }) => editTime(target.valueAsDate, i)}
                  />
                </TD>
                {t.c.map((ch, chi) => (
                  <TD data-label={`ch${chi}`}>
                    <InputTable
                      value={`${ch}%`}
                      onChange={({ target }) =>
                        editChannel(target.value, i, chi as 0 | 1 | 2 | 3)
                      }
                    />
                  </TD>
                ))}
                <TD data-label="action">
                  <AiFillCloseCircle onClick={() => confirmDelete(label, i)} />
                </TD>
              </TR>
            );
          })}
        </TBody>
      </Table>
    </>
  );
};

export default TimesTable;
