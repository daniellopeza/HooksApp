import React, { useState, useEffect } from 'react';

export function Table () {
    const [name, setName] = useState('Daniel');
    const [surname, setSurname] = useState('Lopez');

    useEffect(() => {
        document.title = `${name} ${surname}`;
    })

    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);

        // cleanup phase after effect - react figures out when to execute
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    })

    function handeNameChange(e) {
        setName(e.target.value);
    }

    function handeSurnameChange(e) {
        setSurname(e.target.value);
    }

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

    function renderTableDate() {
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

    return (
        <section>
          <div>
            <input 
              value={name}
              onChange={handeNameChange}
            />
          </div>
          <div>
            <input 
              value={surname}
              onChange={handeSurnameChange}
            />
          </div>
          <div>
            <input 
              value={width}
            />
          </div>
        </section>
    );
}