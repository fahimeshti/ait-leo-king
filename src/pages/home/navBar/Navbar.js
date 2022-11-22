import phoneIcon from '../../../assets/images/phone.png';
import InteriorLogo from '../../../assets/images/InteriorLogo.png';
import { useEffect, useState } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    const [toggle1, setToggle1] = useState(false)
    const [toggle1_1, setToggle1_1] = useState(false)
    const [toggle1_2, setToggle1_2] = useState(false)
    const [toggle1_3, setToggle1_3] = useState(false)
    const [toggle1_4, setToggle1_4] = useState(false)
    const [heightFromTop, setHeightFromTop] = useState(false)

    const toggleNav = () => {
        setToggle(prevCheck => !prevCheck)
        setToggle1(false)
        setToggle1_1(false)
        setToggle1_2(false)
        setToggle1_3(false)
        setToggle1_4(false)
    }

    const toggleNav1 = () => {
        setToggle1(prevCheck => !prevCheck)
        setToggle1_1(false)
        setToggle1_2(false)
        setToggle1_3(false)
        setToggle1_4(false)
    }

    useEffect(() => {
        function watchHeight() {
            setHeightFromTop(window.scrollY > 250)
        }

        window.addEventListener("scroll", watchHeight)

        return function () {
            window.removeEventListener("scroll", watchHeight)
        }
    }, [])

    const navHovFirstRow = [
        {
            name: '3D Board',
            link: 'product'
        },
        {
            name: 'Artificial Wall Plant',
            link: 'product'
        },
        {
            name: 'Decorative Mirror',
            link: 'product'
        },
        {
            name: 'Glass Mosaic Tiles',
            link: 'product'
        },
        {
            name: 'MDF Decorative Panel',
            link: 'product'
        },


    ]
    const navHov2ndRow = [
        {
            name: 'Carpet and Rugs',
            link: 'product'
        },
        {
            name: 'Carpet Tiles',
            link: 'product'
        },
        {
            name: 'Engineered Floor Tiles',
            link: 'product'
        },
        {
            name: 'HDF Floor Tiles',
            link: 'product'
        },
        {
            name: 'KronoXonic Vinyl Floor',
            link: 'product'
        },
        {
            name: 'LG Floor',
            link: 'product'
        },
        {
            name: 'Raised Floor',
            link: 'product'
        },
        {
            name: 'Vinyl (PVC) Floor Tiles',
            link: 'product'
        },

    ]

    const navHov3rdRow = [
        {
            name: 'Bar Stool',
            link: 'product'
        },
        {
            name: 'Bedroom Set',
            link: 'product'
        },
        {
            name: 'Dining Chair',
            link: 'product'
        },
        {
            name: 'Reclinear Sofa',
            link: 'product'
        },
        {
            name: 'Dining Table (Wood)',
            link: 'product'
        },
        {
            name: 'Office Executive Chair',
            link: 'product'
        },
        {
            name: 'Outdoor Furniture',
            link: 'product'
        },

    ]
    const navHov4thRow = [
        {
            name: 'Bedding Set',
            link: 'product'
        },
        {
            name: 'Eagle Safe / Locker',
            link: 'product'
        },
        {
            name: 'Fan with Lightshade',
            link: 'product'
        },
        {
            name: 'LED Spotlight',
            link: 'product'
        },
        {
            name: 'Lightshade',
            link: 'product'
        },
        {
            name: 'Poly Carbonate Sheet',
            link: 'product'
        }
    ]


    return (
        <div>
            <div className='w-full bg-[#333] border-b-[#222] flex flex-row items-center justify-between overflow-x-hidden'>
                <div className='grow p-4 pl-9 text-[#898989] text-center md:text-left text-sm'>
                    <button>SIGN IN</button>
                </div>
                <div className='hidden md:flex flex-row items-center p-4 pr-12 '>
                    <span className='w-6 pr-2'>
                        <img src={phoneIcon} alt="" />
                    </span>
                    <span className='text-[#00ade5]'> +(88) 0192 999 88 00</span>
                </div>
            </div>

            <div className={`invisible md:invisible md:h-0 md:opacity-0 transition duration-600 ${heightFromTop && 'md:visible md:h-[15rem] md:opacity-1'}`}></div>

            <header className={`${heightFromTop ? 'md:fixed md:top-0 md:bg-[#222] md:h-[7rem] h-0' : 'relative md:h-[10rem]'}
            w-full flex flex-col justify-between items-center px-4 h-52 
            md:px-12 z-[10] transition-all duration-400`}>

                <div className={`w-[17rem] ${heightFromTop ? 'md:h-[7rem]' : 'md:h-[10rem]'} flex flex-col md:w-full md:flex-row justify-between items-stretch transition-all duration-400`}>
                    <div className='
                    bg-[#fff] w-full flex justify-center items-center px-0 py-0 
                    md:p-0 md:pt-2 md:w-[260px] md:h-full transition-all duration-400'
                    >
                        <Link to="/" className='w-[100px] p-2
                        md:w-full md:h-full md:-mt-4 flex justify-center items-center transition-all'>
                            <img className='w-[100px] h-full md:object-contain' src={InteriorLogo} alt="Interiorzonebd logo" />
                        </Link>
                    </div>
                    <nav className={`${heightFromTop ? 'bg-[#2b2b2b]' : 'bg-[#5a5a5a]'} relative w-full after:bg-[#22222270] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[80px] md:py-14 md:flex md:flex-col md:items-start transition-all duration-400`}>
                        <div className='md:hidden w-full px-3 flex flex-row items-center justify-between'>
                            <span className='text-white font-bold px-0 py-3 z-40'>MENU</span>
                            <button onClick={toggleNav} className='px-0 py-3 transition-all z-40'>
                                {!toggle ?
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#00ADE5]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg> :
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#00ADE5]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                }

                            </button>
                        </div>

                        <div className='w-full absolute top-[50px] left-0 flex items-center justify-center
                        md:relative md:-top-1 md:h-[50px]'
                        >
                            <ul className={`overflow-hidden md:overflow-visible w-[90%] md:w-full md:px-7 text-xs bg-white md:bg-transparent capitalize transition-all duration-700 z-40 
                            md:flex md:items-center md:flex-row md:max-h-auto md:text-sm 
                            ${!toggle ? 'max-h-0' : 'max-h-[100rem]'} 
                            ${heightFromTop && 'md:translate-y-[5px]'}`}
                            >
                                <li className='border px-2.5 py-2.5 md:pl-0 md:border-0'>
                                    <Link to='/' className='text-[#252525] md:text-[#1cadd9] hover:text-[#1cadd9] transition-colors duration-500'
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li className='border-l border-r px-2.5 py-2.5 md:border-0'>
                                    <Link to="/about" className='text-[#252525] md:text-white hover:text-[#1cadd9] transition-colors duration-500'>
                                        About us
                                    </Link>
                                </li>
                                <li className='mega-menu-parent border-l border-r relative h-full border-t py-0 pb-0 md:border-0'>
                                    <Link to="#" className='md:h-[35px] flex items-center justify-between pl-2.5 text-[#252525] md:text-white hover:text-[#1cadd9] transition-colors duration-500'>
                                        <span className="ht-p-tag pink text-xs">new</span>
                                        Products
                                        <svg xmlns="http://www.w3.org/2000/svg" className="hidden md:inline w-4 align-top pt-[.1rem]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                        </svg>
                                        <span
                                            onClick={toggleNav1}
                                            className='md:hidden w-10 flex justify-center items-center text-[16px] py-2.5 hover:bg-[#1cadd9] hover:text-white'>
                                            {toggle1 ? '-' : '+'}
                                        </span>
                                    </Link>
                                    <ul className={`navbar-mega-menu md:absolute md:top-[2rem] md:-left-[150px] 
                                    flex md:flex-row md:justify-between
                                    md:border md:border-[#1cadd9] bg-white md:p-2 z-50 
                                    relative p-0 flex-col mt-0 m-0 overflow-hidden md:overflow-auto md:max-h-[100vh] ${toggle1 ? 'max-h-[80rem]' : 'max-h-0'}
                                    `}>
                                        <li className='border-b border-t md:border-0 md:m-2'>
                                            <Link to='#' className='flex items-center justify-between pl-5 md:pl-0 md:font-bold uppercase text-[#222] whitespace-nowrap'>
                                                <span className='sm-bottom-border md:pb-3'>WALL COVERINGS</span>
                                                <span
                                                    onClick={() => setToggle1_1(prevCheck => !prevCheck)}
                                                    className='md:hidden w-10 flex justify-center items-center text-[16px] py-2.5 hover:bg-[#1cadd9] hover:text-white'>
                                                    {toggle1_1 ? '-' : '+'}
                                                </span>
                                            </Link>
                                            <ul className={`${toggle1_1 ? 'max-h-[80rem]' : 'max-h-0'} md:max-h-[100vh] md:overflow-x-hidden overflow-hidden transition-all duration-500`}>
                                                {
                                                    navHovFirstRow.map((item, idx) => (
                                                        <li key={idx} className='border-b first:border-t last:border-b-0 md:first:border-t-0 md:border-0 md:border-l-2 md:border-transparent md:hover:border-l-2 md:hover:border-[#222] md:hover:bg-[#1cadd9] md:hover:overflow-hidden transition-all duration-300 cursor-pointer'>
                                                            <span className='md:py.5-1 pl-8 md:pl-0 text-[#222] hover:text-[#1cadd9] py-1.5 block w-full md:text-[#7d7d7d] md:hover:text-white md:hover:translate-x-[10px] transition-all duration-300'>
                                                                <Link to={item.link} className='text-xs uppercase whitespace-nowrap leading-5'>{item.name}
                                                                </Link>
                                                            </span>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </li>
                                        <li className='border-b border-t md:border-0 md:m-2'>
                                            <Link to='#' className='flex items-center justify-between pl-5 md:pl-0 md:font-bold uppercase text-[#222] whitespace-nowrap'>
                                                <span className='sm-bottom-border md:pb-3'>Floorings</span>
                                                <span
                                                    onClick={() => setToggle1_2(prevCheck => !prevCheck)}
                                                    className='md:hidden w-10 flex justify-center items-center text-[16px] py-2.5 hover:bg-[#1cadd9] hover:text-white'>
                                                    {toggle1_2 ? '-' : '+'}
                                                </span>
                                            </Link>
                                            <ul className={`${toggle1_2 ? 'max-h-[80rem]' : 'max-h-0'} md:max-h-[100vh] md:overflow-x-hidden overflow-hidden transition-all`}>
                                                {
                                                    navHov2ndRow.map((item, idx) => (
                                                        <li key={idx} className='border-b first:border-t last:border-b-0 md:first:border-t-0 md:border-0 md:border-l-2 md:border-transparent md:hover:border-l-2 md:hover:border-[#222] md:hover:bg-[#1cadd9] md:hover:overflow-hidden transition-all duration-300 cursor-pointer'>
                                                            <span className='md:py-1.5 pl-8 md:pl-0 text-[#222] hover:text-[#1cadd9] py-1.5 block w-full md:text-[#7d7d7d] md:hover:text-white md:hover:translate-x-[10px] transition-all duration-300'>
                                                                <Link to={item.link} className='text-xs uppercase whitespace-nowrap leading-5'>{item.name}</Link>
                                                            </span>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </li>
                                        <li className='border-b border-t md:border-0 md:m-2'>
                                            <Link to='#' className='flex items-center justify-between pl-5 md:pl-0 md:font-bold uppercase text-[#222] whitespace-nowrap'>
                                                <span className='sm-bottom-border md:pb-3'>Furniture</span>
                                                <span
                                                    onClick={() => setToggle1_3(prevCheck => !prevCheck)}
                                                    className='md:hidden w-10 flex justify-center items-center text-[16px] py-2.5 hover:bg-[#1cadd9] hover:text-white'>
                                                    {toggle1_3 ? '-' : '+'}
                                                </span>
                                            </Link>
                                            <ul className={`${toggle1_3 ? 'max-h-[80rem]' : 'max-h-0'} md:max-h-[100vh] md:overflow-x-hidden overflow-hidden transition-all duration-500`}>
                                                {
                                                    navHov3rdRow.map((item, idx) => (
                                                        <li key={idx} className='border-b first:border-t last:border-b-0 md:first:border-t-0 md:border-0 md:border-l-2 md:border-transparent md:hover:border-l-2 md:hover:border-[#222] md:hover:bg-[#1cadd9] md:hover:overflow-hidden transition-all duration-300 cursor-pointer'>
                                                            <span className='md:py-1.5 pl-8 md:pl-0 text-[#222] hover:text-[#1cadd9] py-1.5 block w-full md:text-[#7d7d7d] md:hover:text-white md:hover:translate-x-[10px] transition-all duration-300'>
                                                                <Link to={item.link} className='text-xs uppercase whitespace-nowrap leading-5'>{item.name}
                                                                </Link>
                                                            </span>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </li>
                                        <li className='border-b border-t md:border-0 md:m-2'>
                                            <Link to='#' className='flex items-center justify-between pl-5 md:pl-0 md:font-bold uppercase text-[#222] whitespace-nowrap' href="#fr">
                                                <span className='sm-bottom-border md:pb-3'>Lightings & Others</span>
                                                <span
                                                    onClick={() => setToggle1_4(prevCheck => !prevCheck)}
                                                    className='md:hidden w-10 flex justify-center items-center text-[16px] py-2.5 hover:bg-[#1cadd9] hover:text-white'>
                                                    {toggle1_3 ? '-' : '+'}
                                                </span>
                                            </Link>
                                            <ul className={`${toggle1_4 ? 'max-h-[80rem]' : 'max-h-0'} md:max-h-[100vh] md:overflow-x-hidden overflow-hidden transition-all duration-500`}>
                                                {
                                                    navHov4thRow.map((item, idx) => (
                                                        <li key={idx} className='border-b first:border-t last:border-b-0 md:first:border-t-0 md:border-0 md:border-l-2 md:border-transparent md:hover:border-l-2 md:hover:border-[#222] md:hover:bg-[#1cadd9] md:hover:overflow-hidden transition-all duration-300 cursor-pointer'>
                                                            <span className='md:py-1.5 pl-8 md:pl-0 text-[#222] hover:text-[#1cadd9] py-1.5 block w-full md:text-[#7d7d7d] md:hover:text-white md:hover:translate-x-[10px] transition-all duration-300'>
                                                                <Link to={item.link} className='text-xs uppercase whitespace-nowrap leading-5'>{item.name}
                                                                </Link>
                                                            </span>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className='border p-2.5 md:border-0'>
                                    <Link to="/coomingsoon" className='text-[#252525] md:text-white hover:text-[#1cadd9] transition-colors duration-500'>
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {!heightFromTop &&
                            (<form className='mt-5 w-full md:px-7 md:w-auto flex items-center justify-center' onSubmit={(e) => e.preventDefault()}>
                                <label htmlFor="table-search" className="sr-only">Search</label>
                                <div className="w-[90%] md:w-auto relative min-h-[2.5rem] z-10">
                                    <input
                                        type="search"
                                        name="search"
                                        id="table-search"
                                        className="w-full min-h-[2.3rem] md:min-h-[2.7rem] md:w-[32rem] bg-[#F2F2F3] border border-transparent hover:border-gray-300 focus:border outline-none text-xs text-gray-900 rounded-md focus:ring-check-blue focus:border-check-blue block pl-5 p-1.5 transition"
                                        placeholder="Enter keyword here"
                                    />
                                    <div className="absolute inset-y-0 right-3 flex items-center md:pr-3 pointer-events-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#252525]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </div>
                                </div>
                            </form>)
                        }

                    </nav>
                </div>
            </header >
        </div >
    );
};

export default Navbar;