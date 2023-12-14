export default function Navbar () {
  return (
    <nav>
      <div className='max-w-5xl mx-auto px-3 py-3 flex items-center justify-between h-16'>
        <a href='/' className='font-bold text-xl hover:text-hot-pink'>
          Blog
        </a>
        <a href='/search' className=''>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
            />
          </svg>
        </a>
      </div>
      <div className='w-full border-b-2 border-black squiggle'></div>
    </nav>
  )
}
