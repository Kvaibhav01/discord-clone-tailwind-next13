export default function Home() {
  return (
    <div className='flex h-screen text-white'>
      <div className='space-y-2 overflow-y-scroll bg-gray-800 p-3'>
        {[...Array(40)].map((_, index) => (
          <div className='flex h-12 w-12 items-center justify-center rounded-full bg-white text-gray-800'>
            {index}
          </div>
        ))}
      </div>

      <div className='flex w-60 flex-col bg-gray-700'>
        <div className='flex h-12 items-center px-3 shadow-md'>
          Tailwind CSS
        </div>
        <div className='flex-1 space-y-2 overflow-y-scroll p-3'>
          {[...Array(40)].map((_, index) => (
            <p>Channel {index}</p>
          ))}
        </div>
      </div>

      <div className='flex flex-1 flex-col bg-gray-600'>
        <div className='flex h-12 items-center px-3 shadow-md'>General</div>
        <div className='flex-1 space-y-4 overflow-y-scroll p-3'>
          {[...Array(40)].map((_, index) => (
            <p>
              Message {index}. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Repudiandae, perspiciatis mollitia voluptate
              ipsa minus, odio adipisci consectetur expedita minima magni
              aliquam blanditiis ipsum possimus cupiditate voluptates suscipit
              quo optio incidunt.
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
