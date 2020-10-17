import React ,{useState} from 'react';
import useToggle from '../Hooks/useToggle';

const Toggler = () => {

    const [isHappy, toggleHappy] = useToggle(false);

    const [isBrokenHeart, toggleBrokenHeart] = useToggle(true);

    return (
        <div>
            <h1 onClick={toggleHappy}>isHappy : {isHappy ? "😃" : "😥"}</h1>

            <h1 onClick={toggleBrokenHeart}>isBrokenHeart : {isBrokenHeart ? "💖" : "💔"}</h1>
        </div>
    );
}

export default Toggler;