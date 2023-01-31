import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react'
export default function Header(){

    const [scroll, setScroll] = useState(false);
    useEffect(() => {
      window.addEventListener("scroll", () => {
        setScroll(window.scrollY > 20);
      });
    }, []);
    return(
        <header className={scroll ? "fixed" : null}>
            <div className='wrapper'>
            <div className="container-header">
                <div className='container-logo'>
                <Link href="/">
                    <Image
                    priority
                    src="/images/logo.png"
                    className='logo'
                    height={60}
                    width={150}
                    alt="logo"
                    />
                </Link>
                </div>
                <nav className='nav-menu'>
                    <ul>
                    <Link href="/"><li>Aménagement</li></Link>
                    <Link href="/"><li>Entretien</li></Link>
                    <Link href="/"><li>Terrassement</li></Link>
                    <Link href="/"><li>Aménagement</li></Link>
                    </ul>
                </nav>
                <Link href="/contact" className='btn'>
                    <span className='btn-text'> Contactez-nous</span>

                </Link>
            </div>
            </div>
        </header>
    )
}