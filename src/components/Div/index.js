import React from 'react';
import MyContext from '../../context';

const Div = () => (
    <ul>
        <li><span>Name</span> <span></span> <span>Username</span></li>
    <MyContext.Consumer>
        {
            (data)=>{
                return (
                    data.map((a, i)=>(
                <li key={a.name}><span>{a.name}</span> <span>=========</span> <span>{a.username}</span></li>
            ))
          
                    )
            }
        }
    </MyContext.Consumer>
    </ul>
)

export default Div;
