import React, { useState } from 'react';

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

    function renderTableData() {
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

    function renderTableHeader() {
      let header = Object.keys(bills[0]);
      return header.map((key, index) => {
         return <th key={index}>{key.toUpperCase()}</th>
      })
    }

    return (
        <div> 
            <div style={{alignText: 'center'}}>
                BILLS: 
            </div>
            <table>
                <tbody>
                <tr>
                    {renderTableHeader()}
                </tr>
                    {renderTableData()}
                </tbody>
            </table>
        </div>
    );
}