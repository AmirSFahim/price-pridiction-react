import React from 'react';

const Link = ({route}) => {
    return (
        <div>
            <li><a className='mr-10' href={route.path}> {route.name}</a> </li>
        </div>
    );
};

// Link.propTypes ={

// }

export default Link;