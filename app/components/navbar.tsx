import Image from 'next/image';
import Link from 'next/link'

export default function NavBar() {
    return (
      <div className="navbar">

        {/* Logo */}
 <div>
  <Image src="/logo.png" alt="logo" className='logo'/>
  </div>
 
 {/* NavBar Menu */}
  <div className="navbar-menu">
  <ul className="navbar-links">
    <li><Link href="/">Home</Link></li>
    <li><Link href="/about">About</Link></li>
    <li><Link href="/services">Services</Link></li>
    <li><Link href="/contact">Contact</Link></li>
  </ul>
  </div>

</div>
    );
  }