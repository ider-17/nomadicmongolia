export default function Header() {
    return (
        <div className="flex justify-between text-black w-full h-[70px] items-center px-4 fixed">
            <div className="flex gap-8">
                <img />
                <div>Home</div>
                <div>Tour</div>
                <div>Destination</div>
                <div>Activities</div>
                <div>Pages</div>
                <div>Contact</div>
            </div>

            <div className="flex gap-4 items-center">
                <div>USD</div>
                <div>Help</div>
                <div>Sign up</div>
                <div className="border rounded-2xl py-1 px-2 hover:text-white">Log in</div>
            </div>
        </div>
    )
}