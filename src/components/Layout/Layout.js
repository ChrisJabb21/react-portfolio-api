import React from 'react';
import Sidebar from '../Sidebar';
import MobileNav from '../MobileNav';
import UserHeader from '../UserHeader';

const Layout = ({ user, children }) => {
    return ( 
     <>
        <MobileNav />
        <Sidebar />
        <StyledContent>
            <UserHeader user={user} />
            <div>{children}</div>
        </StyledContent>
    </>
     );
};
 
export default Layout;