import styled from "styled-components";

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  th,
  td {
    padding: 0.5rem;
  }
  th {
    text-align: left;
    color: #aaa;
    font-weight: normal;
    font-size: 0.9rem;
    background-color: #f2f2f2;
    border-bottom: 1px solid #ddd;
  }
  td {
    text-align: left;
  }
  tr:nth-child(even) {
    /* background-color: #f2f2f2; */
    border-bottom: 1px solid #ddd;
  }
  tr:nth-child(odd) {
    /* background-color: #f2f2f2; */
    border-bottom: 1px solid #ddd;
  }
  tr:hover {
    background-color: #ddd;
  }
`;

export default function Table(props) {
  return <StyledTable {...props}></StyledTable>;
}
