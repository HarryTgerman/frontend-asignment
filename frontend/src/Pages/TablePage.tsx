import React, {useState} from "react";
import styled from "styled-components";
import Table from "../components/Table";
import Loader from "../components/Loader";
import Input from "../components/Input" ;
import { useQuery } from 'react-query';

const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 18px;
    align-items: center;
    padding-bottom: 56px;
`

const H1 = styled.h1`
    margin-top: 20px;
    font-size: 1.6rem;
    font-weight: 500;
`

const QueryArea = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
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
`

export const fetchQuery = async (query: string): Promise<any> => {
  if (typeof query === 'string') {
    const res = await fetch("http://localhost:3000/query", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ query }),
        });
    // need to do this with fetch since doesn't automatically throw errors axios and graphql-request do
    if (res.ok) {
      return res.json();
    }
    throw new Error('Network response not ok'); // need to throw because react-query functions need to have error thrown to know its in error state
  }
  throw new Error('invalid query'); // need to throw because react-query functions need to have error thrown to know its in error state
};


export const TablePage = () => {
  const [query, setQuery] = useState<string | undefined>();
  const [val, setVal] = useState<string | undefined>();

  const { isLoading, isError, error, data, refetch } = useQuery<any, Error>(['query', query], () => fetchQuery(query));
  
  return (
    <Content>
      <H1>Dune (alpha)</H1>
      <QueryArea>
      <Input
        value={val}
        onChange={(e) => {
          setVal(e.target.value);
        }}
      />
        
      <Button className="executeButton" onClick={() =>setQuery(val)}>
        Run
      </Button>
      </QueryArea>
      
      {isError && <H1>Error: {error?.message}</H1>}
      {isLoading && query && <Loader size="56px"  color={"black"}/>}
      {data && (
        <Table results={data}/>
      )}
    </Content>
  );
};

export default TablePage;
