import Link from "next/link"

const Header = () => {
  return (
    <div>
     <header className="header"></header>
      <div className="container">
       <div className="logo">
         <Link href="/">Codies Codes</Link>
       </div>
       <div className="links">
        <Link href="/about">About</Link>
        <Link href="/about/team">Our Team</Link>
        <Link href="/code/repository">Code</Link>
       </div>
      </div>
    </div>
  )
}

export default Header
