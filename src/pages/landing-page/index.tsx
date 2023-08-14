import EventItem from '../../components/eventItem'

export default function LandingPage() {
  return (
    <div className='relative flex flex-col h-[100dvh] max-h-[100dvh]'>
      <div className='relative'>
        <img
          src='/src/assets/images/hero.jpg'
          className='h-56 w-screen object-cover drop-shadow-2xl shadow-secondary-700 brightness-50'
        />
        <img
          src='/src/assets/images/logo-whatnow-name.svg'
          className='h-auto w-64 absolute bottom-1/2 translate-y-1/2 left-1/2 -translate-x-1/2'
        />
      </div>
      <div className='flex-grow overflow-y-scroll shadow-inner shadow-secondary-700 no-scrollbar'>
        <EventItem
          title="Code 'Til You Drop Party"
          location='164 Eglinton Ave E, Toronto, ON M4P 1A6'
          category='Entertainment'
          likes={520}
          dislikes={134}
          time={Date.now() - Math.floor(Math.random() * 10000000)}
          bookmark={false}
        />
        <EventItem
          title="Code 'Til You Drop Party"
          location='164 Eglinton Ave E, Toronto, ON M4P 1A6'
          category='Entertainment'
          likes={520}
          dislikes={134}
          time={Date.now() - Math.floor(Math.random() * 10000000)}
          bookmark={false}
        />
        <EventItem
          title="Code 'Til You Drop Party"
          location='164 Eglinton Ave E, Toronto, ON M4P 1A6'
          category='Entertainment'
          likes={520}
          dislikes={134}
          time={Date.now() - Math.floor(Math.random() * 10000000)}
          bookmark={false}
        />
        <EventItem
          title="Code 'Til You Drop Party"
          location='164 Eglinton Ave E, Toronto, ON M4P 1A6'
          category='Entertainment'
          likes={520}
          dislikes={134}
          time={Date.now() - Math.floor(Math.random() * 10000000)}
          bookmark={false}
        />
        <EventItem
          title="Code 'Til You Drop Party"
          location='164 Eglinton Ave E, Toronto, ON M4P 1A6'
          category='Entertainment'
          likes={520}
          dislikes={134}
          time={Date.now() - Math.floor(Math.random() * 10000000)}
          bookmark={false}
        />
        <EventItem
          title="Code 'Til You Drop Party"
          location='164 Eglinton Ave E, Toronto, ON M4P 1A6'
          category='Entertainment'
          likes={520}
          dislikes={134}
          time={Date.now() - Math.floor(Math.random() * 10000000)}
          bookmark={false}
        />
        <EventItem
          title="Code 'Til You Drop Party"
          location='164 Eglinton Ave E, Toronto, ON M4P 1A6'
          category='Entertainment'
          likes={520}
          dislikes={134}
          time={Date.now() - Math.floor(Math.random() * 10000000)}
          bookmark={false}
        />
        <EventItem
          title="Code 'Til You Drop Party"
          location='164 Eglinton Ave E, Toronto, ON M4P 1A6'
          category='Entertainment'
          likes={520}
          dislikes={134}
          time={Date.now() - Math.floor(Math.random() * 10000000)}
          bookmark={false}
        />
      </div>
      <div className='flex flex-col items-center justify-end bg-gradient-to-t from-slate-900 via-slate-900 to-transparent h-1/2 w-screen absolute z-10 bottom-0 gap-5 pb-14 pointer-events-none'>
        <h2 className='text-xl font-medium text-secondary-200'>
          Continue with
        </h2>
        <div className='flex gap-14'>
          <button className='h-12 w-12 rounded-full flex justify-center items-center bg-white'>
            <img
              src='/src/assets/images/logo-google.svg'
              className='h-3/5 w-auto'
            />
          </button>
          <button className='h-12 w-12 rounded-full flex justify-center items-center bg-white'>
            <img
              src='/src/assets/images/logo-facebook.svg'
              className='h-4/6 w-auto'
            />
          </button>
          <button className='h-12 w-12 rounded-full flex justify-center items-center bg-white'>
            <img
              src='/src/assets/images/logo-apple.svg'
              className='h-3/5 w-auto mb-0.5 mr-0.5'
            />
          </button>
        </div>
      </div>
    </div>
  )
}
