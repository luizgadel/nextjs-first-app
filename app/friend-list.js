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
        <div className="border p-2 mx-96 mt-8 flex flex-col items-center">
            <p>
                Click the button below so I can show you some of my friends' names: 
            </p>

            <button 
                disabled={theEnd} 
                className="my-4 w-24 h-8 bg-indigo-500 text-white rounded-full border disabled:bg-white disabled:text-black disabled:opacity-50 disabled:border-black" 
                onClick={handleClick}
            >
                Click me!
            </button>
            <div className="flex flex-row flex-wrap">
                {revealedList.map((name) => (
                    <span className="mx-2" key={name}>{name}</span>
                ))}
                { theEnd ? <span>...</span> : ''}
            </div>
        </div>
    )
}