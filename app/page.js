import FriendList from "./friend-list";

function Header({title}) {
    return <h1>{title ? title : 'Default title'}</h1>;
}

export default function HomePage() {

    return (
        <div>
            <Header title="Hello! My name is Luiz and I'm coding with Next.js " />
            
            Click the button below so I can show you some of my friends' names: 
            
            <FriendList />
        </div>
    )
}