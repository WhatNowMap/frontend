import { Link } from 'react-router-dom'
import EventItem from '../../components/eventItem'
import logo_whatnow_name from '../../assets/images/logo-whatnow-name.svg'
import logo_google from '../../assets/images/logo-google.svg'
import logo_facebook from '../../assets/images/logo-facebook.svg'
import logo_twitter from '../../assets/images/logo-twitter.svg'
import hero from '../../assets/images/hero.jpg'

const baseUrl = import.meta.env.VITE_REACT_APP_BASEURL

export default function LandingPage() {
  return (
    <div className='relative flex flex-col h-[100dvh] max-h-[100dvh]'>
      {/* Hero */}
      <div className='relative'>
        <img
          src={hero}
          className='h-56 w-screen object-cover drop-shadow-2xl shadow-secondary-700 brightness-50'
        />
        <img
          src={logo_whatnow_name}
          className='h-auto w-64 absolute bottom-1/2 translate-y-1/2 left-1/2 -translate-x-1/2'
        />
      </div>
      {/* Unprotected EventList */}
      <div className='flex-grow overflow-y-scroll shadow-inner shadow-secondary-700 no-scrollbar'>
        {[...Array(10).keys()].map((i) => (
          <EventItem
            key={i}
            title="Code 'Til You Drop Party"
            location='164 Eglinton Ave E, Toronto, ON M4P 1A6'
            category='Entertainment'
            likes={520}
            dislikes={134}
            time={Date.now() - Math.floor(Math.random() * 10000000)}
            bookmark={false}
          />
        ))}
      </div>
      {/* Gradient block */}
      <div className='bg-gradient-to-t from-slate-900 via-slate-900 to-transparent h-1/2 w-screen absolute z-10 bottom-0 pointer-events-none' />
      {/* Auth */}
      <div className='flex flex-col items-center justify-end w-screen absolute z-20 bottom-0 gap-5 pb-14'>
        <h2 className='text-xl font-medium text-secondary-200'>
          Continue with
        </h2>
        <div className='flex gap-14'>
          <Link
            to={`${baseUrl}auth/google`}
            className='h-12 w-12 rounded-full flex justify-center items-center bg-white cursor-pointer'>
            <img
              src={logo_google}
              className='h-3/5 w-auto'
            />
          </Link>
          <Link
            to={`${baseUrl}auth/facebook`}
            className='h-12 w-12 rounded-full flex justify-center items-center bg-white'>
            <img
              src={logo_facebook}
              className='h-[75%] w-auto'
            />
          </Link>
          <Link
            to={`${baseUrl}auth/twitter`}
            className='h-12 w-12 rounded-full flex justify-center items-center bg-white'>
            <img
              src={logo_twitter}
              className='h-[55%] w-auto mt-1 ml-0.5'
            />
          </Link>
        </div>
      </div>
    </div>
  )
}
