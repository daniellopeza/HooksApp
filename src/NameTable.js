import React, { useState, useEffect } from 'react';

export function NameTable () {
    const name = useFormInput('Daniel');
    const surname = useFormInput('Lopes');
    const width  = useWindowWidth();
    useDocumentTitle(`${name.value} ${surname.value}`);

    return (
        <section>
          <div>
            <input {...name}/>
          </div>
          <div>
            <input {...surname}/>
          </div>
          <div>
            <input 
              value={width}
            />
          </div>
        </section>
    );
}

// can return an obj with state and/or inner functions 
function useFormInput(initialValue){
    const [value, setValue] = useState(initialValue);

    function handleChange(e) {
        setValue(e.target.value);
    }

    // notice these values are the values needed in the <input /> tag, and that
    // you can simple spread the obj returned in the html {...obj} to use them :O
    return {
      value,
      onChange: handleChange
    }
}

function useDocumentTitle(title){
  useEffect(() => {
      document.title = title;
  });
}

// custom hook extracts state from another function to make 
// it a local state that can be accessed by any other class/function 
function useWindowWidth(){
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);

        // cleanup phase after effect - react figures out when to execute
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    })

    return width;
}