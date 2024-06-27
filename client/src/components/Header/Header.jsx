import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='bg-secondary '>
        <div className="container">
            <div className="row align-items-center">
                <div className="logo col-lg-2">
                    <Link to={'/'}>
                        Oxu.az
                    </Link>
                </div>
                <div className="col-lg-10">
                    <nav className='text-end'>
                        <Link to={'/'}>Ana Sehife</Link>
                        <Link to={'/news'}>Xeberler</Link>
                    </nav>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header;