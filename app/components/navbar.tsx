import Link from 'next/link'

export default function NavBar() {
    return (
      <div className="navbar">

        {/* Logo */}
 <div>
  <img src="/logo.png" alt="logo" className='logo'/>
  </div>
 
 {/* NavBar Menu */}
  <div className="navbar-menu">
  <ul className="navbar-links">
    <li><Link href="/" className="link">Home</Link></li>
    <li><Link href="/services" className="link">Services</Link></li>
    <li><Link href="/contact" className="link">Contact</Link></li>
  </ul>
  </div>

</div>
    );
  }