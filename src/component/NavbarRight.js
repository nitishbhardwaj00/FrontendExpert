import React, {useState} from 'react';
import NavbarRightHeader from './NavbarRightComponent/NavbarRightHeader';
//import Icon from './navbarleftComponent/Icon';
import NavbarRightFooter from './NavbarRightComponent/NavbarRightFooter';
//import MainContainer from './MainContainer';
//import BegineerCourse from './courseStructure/BegineerCourse';
import { Link } from "react-router-dom";

  

export default function NavbarRight() {

    const [isActive , setActive] = useState(false);

    const handleToggle = () => {
        setActive(!isActive);
    }



    return (
        <div className={isActive ? 'right-sidebar active' : 'right-sidebar'} onClick = {handleToggle}>
            <NavbarRightHeader iconName=" ri-menu-3-fill icon"
            fontSize='30' color="#8c8c8e" title='Facebook' />

<ul>
<Link to="/">Home</Link>
    
</ul>



            
            <NavbarRightFooter iconName="ri-login-box-line" fontSize='30' color="#8c8c8e" title='Facebook'/>
        </div>
    )
}
