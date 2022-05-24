import React, { useState } from "react";
import { useFilters, useTable, useSortBy } from 'react-table';
import './styles.css';

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
    const handleFilterBs = e => {
        const value = e.target.value || undefined;
        setFilter("company.bs", value)
        setFilterInput(value);
    }

    return (        
        <table {...getTableProps()}>
            <thead>
                <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <input
                     className="search"
                     value={filterInput}
                     onChange={handleFilterBs}
                     placeholder={"Pesquise um nicho..."}
                    />
                </tr>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                             {column.render("Header")}
                             <span>
                                {column.isSorted
                                 ? column.isSortedDesc
                                  ? '⬇️'
                                  : '⬆️'
                                 : ''
                                }
                             </span>
                            </th>
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