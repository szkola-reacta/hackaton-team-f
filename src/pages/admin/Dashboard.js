import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api";
// import List from "../../components/List";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
// import Room from "../../components/Room";

function Dashboard() {
  const [data, setData] = useState([]);
  const [fields, setFields] = useState([]);
  const params = useParams();

  useEffect(() => {
    const getData = async() => {
      const apiData = await api.get(params.section);
      setData(apiData);
    };
    const getFields = async() => {
      const apiFields = await api.get(`adminMenu/?url=${params.section}`);
      setFields(Object.entries(apiFields[0].labels[0]));
    };
    getData();
    getFields();
  }, [params.section]);

  return (
    <>
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            {fields.map(([key, value]) => (
              <TableCell key={key}>{value}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id} className="tableRow">
              {fields.map(([key]) => (
                <TableCell key={key}>{row[key]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}

export default Dashboard;