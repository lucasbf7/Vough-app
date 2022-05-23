import axios from "axios";
import React, { useMemo, useState, useEffect } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from "./Table";

function App() {
  const [data, setData] = useState([]);
  const columns = useMemo(
    () => [
      {
        Header: "Cliente",
        accessor: "name"
      },
      {
        Header: "Email",
        accessor: "email"
      },
      {
        Header: "Telefone",
        accessor: "phone"
      },
      {
        Header: "Compania",
        accessor: "company.name"
      },
      {
        Header: "Nicho",
        accessor: "company.bs",
      }
    ],
    []
  );

  useEffect(() => {
    (async () => {
      const result = await axios("https://jsonplaceholder.typicode.com/users");
      setData(result.data);
    })();
  }, []);

  return (
    <div className="App">
      <Table columns={columns} data={data} />
    </div>
  );
}

export default App;
