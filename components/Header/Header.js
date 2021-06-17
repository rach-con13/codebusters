export default function Header() {
    return (
        <header className="w-10/12 lg:w-9/12 mx-auto">
          <div  className="py-8 flex justify-between items-baseline">
            <h1 className="text-lg font-semibold bg-white text-light">Codebusters</h1>
            <nav className="text-base font-semibold  items-baseline text-superlight hidden sm:flex ">
             <p className="">Login</p>
             <p className="ml-4">Sign Up</p>
            </nav>
          </div>
        </header>
    )
}