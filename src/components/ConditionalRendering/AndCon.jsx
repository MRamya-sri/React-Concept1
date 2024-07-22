import React from 'react'


const Cart = () => {
    const items = ["wireless earbuds", "Power Bank", "New SSD", "Hoodies"]
    
    return(
        <>
        <h3> Cart </h3>       
        {items.length > 0 && <h3> You have {items.length} items in your cart.</h3>}
        
        <ul>
            <h4> Products you ordered</h4>
            {items.map(item => (
                <li key={Math.random}>
                    {item}
                </li>
            ))};
        </ul>
        </>
    );
};


const AndCon = () => {
  return (
    <>
    <h2> And (&&) conditional Rendering </h2>
    <h3> Example of And conditional rendering to show how many cart items have been ordered.</h3>
    <Cart/>
    </>
  );
};

export default AndCon;
