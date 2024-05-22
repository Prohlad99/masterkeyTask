import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="bg-[#3B566B] h-[100vh] w-[100vw] flex justify-center items-center ">
      <div>
        <Link to='https://masterkeytask01.netlify.app/'><button className="border-[1px] border-sky-400 rounded-md px-3 py-1 mx-2 bg-stone-300">Task 01</button></Link>
        <Link to='/task2'><button className="border-[1px] border-sky-400 rounded-md px-3 py-1 mx-2 bg-stone-300">Task 02</button></Link>
      </div>
    </div>
  )
}

export default Navbar
