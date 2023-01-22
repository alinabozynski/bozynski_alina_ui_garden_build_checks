import React, { FC } from "react";
import styled from "styled-components";

import { TableProps } from "./Table.types";

const StyledTable = styled.table<TableProps>`
  caption-side: top;
  cursor: ${(props) => (props.disabled ?? false ? "not-allowed" : "pointer")};
  border: none;
  color: ${(props) => (props.disabled ?? false ? "#515050" : "#000")};
  border-collapse: collapse;
  /* border-collapse: separate; */
  /* border-spacing: 5px 10px; */

  caption-side: top;
  td,
  th {
    border: none;
  }
  /* td,
  th {
    border: 1px solid;
  } */

  td {
    padding: 5px 10px;
  }

  tbody tr {
    :nth-of-type(odd) {
      background-color: ${(props) => props.oddRowBackground};
    }
    :nth-of-type(even) {
      background-color: ${(props) => props.evenRowBackground};
    }
    :hover {
      background-color: ${(props) =>
        props.disabled ?? false ? "" : "#a3ff94"};
    }
  }
  thead > tr {
    background-color: ${(props) => props.headerBackground};
  }
  caption {
    font-size: 0.9em;
    padding: 5px;
    font-weight: bold;
  }

  tfoot tr {
    :nth-of-type(odd) {
      background-color: ${(props) => props.footerBackground};
    }
    :nth-of-type(even) {
      background-color: ${(props) => props.footerBackground};
    }
  }
`;

const Table: FC<TableProps> = ({
  disabled,
  caption,
  heading1,
  heading2,
  heading3,
  row1cell1,
  row1cell2,
  row1cell3,
  row2cell1,
  row2cell2,
  row2cell3,
  row3cell1,
  row3cell2,
  row3cell3,
  footer1,
  footer2,
  footer3,
  ...props
}) => {
  return (
    <StyledTable disabled={disabled} {...props}>
      <caption>{caption}</caption>
      <thead>
        <tr {...props}>
          <th>{heading1}</th>
          <th>{heading2}</th>
          <th>{heading3}</th>
        </tr>
      </thead>
      <tbody>
        <tr {...props}>
          <td>{row1cell1}</td>
          <td>{row1cell2}</td>
          <td>{row1cell3}</td>
        </tr>
        <tr {...props}>
          <td>{row2cell1}</td>
          <td>{row2cell2}</td>
          <td>{row2cell3}</td>
        </tr>
        <tr {...props}>
          <td>{row3cell1}</td>
          <td>{row3cell2}</td>
          <td>{row3cell3}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr {...props}>
          <th>{footer1}</th>
          <th>{footer2}</th>
          <th>{footer3}</th>
        </tr>
      </tfoot>
    </StyledTable>
  );
};

export default Table;
