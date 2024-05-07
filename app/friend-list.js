'use client'

import { useState } from "react";

export default function FriendList() {
    const [friendsToReveal] = useState(
        [
            'Marcus', 'Ana', 'Ícaro', 'Karol',
            'Mike', 'Letícia', 'Karine', 'Beatriz', 
            'Bryan', 'Raimundo', 'Paulo', 'Rodrigo',
            'Enrico', 'Vini', 'Dayu', 'Mark', 
        ]
    )

    const [revealedList, setRevealedList] = useState([]);

    const [theEnd, setTheEnd] = useState(false)
    
    function handleClick() {
        if (friendsToReveal.length != 0)
            setRevealedList(revealedList.concat([friendsToReveal.pop()]));
        else 
            setTheEnd(true)
    }

    return (
        <>
            <br />
            <button onClick={handleClick}>Click me!</button>



            <ul>
                {revealedList.map((name) => (
                    <li key={name}>{name}</li>
                ))}
                { theEnd ? <li>...</li> : ''}
            </ul>
        </>
    )
}