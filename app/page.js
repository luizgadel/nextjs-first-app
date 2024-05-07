import FriendList from "./friend-list";
import Image from "next/image";

function Header({title}) {
    return <h1 className="text-3xl font-bold underline mx-auto"> {title ? title : 'Default title'}</h1>;
}

export default function HomePage() {

    return (
        <div className="flex flex-col container mx-auto">
            <Header title="Hello, my name is Luiz. Nice to meet you!" />
            
            <FriendList />

            <div className="mx-96 pt-4 px-4 mt-8 border">
                This is my first app built with:
                <div className="flex flex-row  items-center">
                    <Image src="/nextjs.png"  width={100} height={50} alt="Next.js logo" className="my-auto mx-2"/>
                    <span className="ms-4">AND</span>
                    <Image src="/tailwindcss.png"  width={200} height={100} alt="Next.js logo" className="mx-2"/>
                </div>
            </div>
        </div>
    )
}