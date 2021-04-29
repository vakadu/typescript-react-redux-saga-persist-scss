import React from 'react';

function Layout({ children }) {
    return(
        <div className='layout'>
            <div>
                { children }
            </div>
        </div>
    );
}

export default Layout;
