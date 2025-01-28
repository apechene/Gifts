import { useState } from "react";
import { AddCategory,Gifgrid } from "./components";


export const GifExpertApp = () => { 

    const [categories, setCategories] = useState (['One Punch']);

    const handleAdd = (newCategory) => { 
        
        if(categories.includes(newCategory)) {
            return;
        }

        setCategories( [...categories, newCategory]);
      // categories.push(newCategory);
    
    }

    return (
        <>
        { /* titulo */}   
        <div>
        <h2>GifExpertApp</h2>
        <hr />
        { /* titulo */}   

        { /* AddCategory */}

        <AddCategory 

            onNewCategory={ handleAdd }
        
        />

    
            { categories.map( category =>  (

              < Gifgrid  key={category} category={ category }  />
                    
                )

             ) 
                
                } 
       
     
     <button onClick={handleAdd}>Agregar</button> 
    
        { /* Listado de Gifts */}   
        </div>
        </>
    );
    }