export default function Home() {
  return (
    <>
      {/* Channels */}
      <div className='flex w-60 flex-col bg-gray-800'>
        <div className='flex h-12 items-center px-3 font-title text-white shadow-md'>
          Tailwind CSS
        </div>
        <div className='flex-1 space-y-2 overflow-y-scroll p-3 font-medium text-gray-300'>
          <p className='text-white'>Channel(unread)</p>
          <p className='text-white'>Channel(unread)</p>
          {[...Array(40)].map((_, index) => (
            <p>Channel {index}</p>
          ))}
        </div>
      </div>

      {/* Main area */}
      <div className='flex flex-1 flex-col bg-gray-700'>
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
    </>
  );
}
