import React, { useState } from 'react';
import './Bills.css';

export function Bills(){
    const [bills, setBills] = useState([
        {
            name: 'Rent',
            amount: 2000
        },
        {
            name: 'Parking',
            amount: 200
        },
        {
            name: 'Car',
            amount: 400 
        }
    ]);

    return (
        <div className="bills"> 
            <div>
                BILLS: 
            </div>
            <table>
                <tbody>
                <tr>
                    {renderTableHeader(bills)}
                </tr>
                    {renderTableData(bills)}
                </tbody>
            </table>
        </div>
    );
}

function renderTableHeader(bills) {
    let header = Object.keys(bills[0]);
    return header.map((key, index) => {
        return <th key={index}>{key.toUpperCase()}</th>
    })
}

function renderTableData(bills) {
    return bills.map((bill, index) => {
        // destructure 
        const {name, amount} = bill; 
        return (
            <tr key={name}> 
                <td>{name}</td>
                <td>{amount}</td>
            </tr>
        )
    })
}