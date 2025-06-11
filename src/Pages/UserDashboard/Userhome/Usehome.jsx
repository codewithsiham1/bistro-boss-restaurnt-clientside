import React from 'react';
import Useauth from '../../../Hooks/Useauth';

const Usehome = () => {
    const {user}=Useauth()
    return (
        <div>
            <h1 className="text-xl font-bold">
                <span>Hi,Welcome</span>
                {
                    user?.displayName ?user.displayName:"Back"
                }
            </h1>
        </div>
    );
};

export default Usehome;