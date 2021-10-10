import React from 'react'
import Left from '../components/left';
import Right from '../components/right';

const Library = () => {
    return (
        <div>
            <Left/>
            <Right/>
            <div className=" Rightbottomone">
                <h2> You haven't made any library Yet </h2>
            </div>
        </div>
    )
}
export default Library;