import React, { useState } from "react";
import styled from "styled-components";


 const StyledTable = styled.table<{
    columns: string;
  }>`
    background-color: rgba(255, 0, 122, 0.03);
    display: grid;
    border-collapse: collapse;
    grid-template-columns:  repeat(${({ columns }) => columns ?? "auto"}, 1fr);
    max-width: 956px;
    `;

 const TableHead = styled.thead`
    display: contents;
    font-weight: 500;
    background: rgba(255, 0, 122, 0.1);

`; 

const TableHeadCell = styled.th`
    position: sticky;
    top: 0;
    background: #f4603e;
    text-align: left;
    font-weight: normal;
    font-size: 1.1rem;
    color: white;
    padding: 12px;
    text-transform: uppercase;
`; 

  

 const TableRow = styled.tr`
    display: contents;
`; 


const TableBody = styled.tbody`
    display: contents;
`

const TableCell = styled.td`
    padding: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    border: solid;
`


const Button = styled.button`
    background: #1e1870;
    color: #fff;
    padding: 0.4rem 1.4rem;
    min-height: 3rem;
    font-size: 1.4rem;
    line-height: 2rem;
    max-width: 100px;
    align-self: center;
    border-radius: 5px;
    margin: 12px;
`

export const Table = ({results}: {results:any}) => {

    const [prevPagination, setPrevPagination] = useState<number | undefined>(0);
    const [pagination, setPagniation] = useState<number | undefined>(20);

    return (
        <StyledTable columns={Object.keys(results[0]).length.toString()}>
        <TableHead>
          <TableRow>
          {Object.keys(results[0]).map((key) => {
            return <TableHeadCell>{key}</TableHeadCell>;
          })}
          </TableRow>
        </TableHead>
        <TableBody>

        {results.map((row, index) => {
          return  index < pagination && index >= prevPagination && (
            <TableRow>
              {Object.entries(row).map(([key, value]) => {
                return <TableCell>{value}</TableCell>;
              })}
            </TableRow>
          );
        })}
        </TableBody>
        <div>
        {prevPagination != 0 && <Button onClick={()=>{
            setPagniation(pagination-20);
            setPrevPagination(prevPagination-20);
            }}>Prev</Button>}
        <Button onClick={()=>{
            setPagniation(pagination+20);
            setPrevPagination(prevPagination+20);
            }}>Next</Button>
        </div>
      </StyledTable>

    );
  };
  
  export default Table;