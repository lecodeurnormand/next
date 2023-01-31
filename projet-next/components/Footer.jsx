import Image from 'next/image';
import Link from 'next/link';
export default function Footer(){
    return(
        <footer>
            <div className="container-footer">
            <div className="container-logo">
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
                <div className="container-menu">
                    <nav>
                        <ul>
                            <Link href="/"><li>Aménagement</li></Link>
                            <Link href="/"><li>Entretien</li></Link>
                            <Link href="/"><li>Terassement</li></Link>
                            <Link href="/"><li>Nos créations</li></Link>
                        </ul>
                    </nav>
                </div>
                <div className="container-social">
                <Link href="/">
                    <Image
                    priority
                    src="/images/svg/facebook.svg"
                    className='logo'
                    height={30}
                    width={30}
                    alt="logo"
                    />
                </Link>
                <Link href="/">
                    <Image
                    priority
                    src="/images/svg/insta.svg"
                    className='logo'
                    height={30}
                    width={30}
                    alt="logo"
                    />
                </Link>
                </div>
            </div>
        </footer>
    )
}