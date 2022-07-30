import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  {
    field: "name",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) => `${params.row.name || ""} `
  },
  { field: "birth_year", headerName: "Year Born", width: 100 },
  { field: "gender", headerName: "Gender", width: 130 },
  { field: "hair_color", headerName: "Hair Color", width: 130 },
  {
    field: "height",
    headerName: "Height",
    type: "number",
    width: 90
  },
  {
    field: "mass",
    headerName: "Mass",
    type: "number",
    width: 90
  }
];

export default function CharacterTable({ data }) {
  return (
    <div
      style={{
        height: 400,
        width: "100%",
        marginRight: "50px",
        marginLeft: "50px",
        marginTop: "10px"
      }}
    >
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        getRowId={Math.random}
      />
    </div>
  );
}
