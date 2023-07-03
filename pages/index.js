export default function Home() {
  return (
    <>
      {/* Channels */}
      <div className='flex w-60 flex-col bg-gray-800'>
        <div className='flex h-12 items-center px-3 font-title text-white shadow-md'>
          Dashboard
        </div>
        <div className='flex-1 space-y-2 p-3 font-medium text-gray-300'>
          <p className='text-white'>Friends</p>
        </div>
      </div>

      {/* Main area */}
      <div className='flex flex-1 flex-col bg-gray-700'></div>
    </>
  );
}
