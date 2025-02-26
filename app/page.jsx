import Link from "next/link";
import Courses from "./component/Courses";

const HomePage = () => {
  return (
    <div>
     <h1>Welcome To Codie Codes</h1>
     <Courses />
      <ul>
        <li><Link href='/'>Home</Link></li>
        <li><Link href='/about'>About</Link></li>
        <li><Link href='/about/team'>Team</Link></li>
      </ul>
    </div>
  )
}

export default HomePage;
