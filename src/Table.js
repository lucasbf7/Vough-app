import React, { useState } from "react";
import { useFilters, useTable, useSortBy } from 'react-table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Table ({ columns, data }) {
    const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setFilter
    } = useTable(
        {
        columns,
        data
        },
        useFilters,
        useSortBy
    );

    const [filterInput, setFilterInput] = useState("");
    const handleFilterChange = e => {
        const value = e.target.value || undefined;
        setFilter("company.bs", value)
        setFilterInput(value);
    }

    const element= <FontAwesomeIcon icon="fa-light fa-arrow-down-a-z" />

    return (        
        <table {...getTableProps()}>
            <thead>
                <tr>
                    <input
                     value={filterInput}
                     onChange={handleFilterChange}
                     placeholder={"Pesquise"}
                    />
                </tr>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps(column.getSortByToggleProps())}
                             className={column.isSorted
                                ? column.isSortedDesc
                                    ? "sort-alpha-asc"
                                    : "sort-asc"
                                : ""
                             }
                            >{column.render("Header")}</th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </table>

    )
}