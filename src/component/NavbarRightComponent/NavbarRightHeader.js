import React from 'react';



export default function NavbarRightHeader(props) {
   
    return (
        <section className="navbar-right-section">
            <span 
                className= {props.iconName}  
                tooltip= {props.title} 
                style={{
                    color:props.color , 
                    fontSize:props.fontSize + 'px'}
                }>

            </span>
        </section>
    )
}