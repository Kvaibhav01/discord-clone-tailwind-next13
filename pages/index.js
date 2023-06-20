export default function Home() {
  return (
    // <div className='flex min-h-screen items-center justify-center bg-gray-700 text-white'>
    //   <div className='max-w-lg'>
    //     <div className='flex px-4 py-1 hover:bg-gray-800 hover:bg-opacity-30'>
    //       <img
    //         className='mr-4 h-10 w-10 rounded-full'
    //         src='/vaibhav.jpg'
    //         alt='Profile picture of Vaibhav'
    //       />
    //       <div>
    //         <p className='flex items-baseline'>
    //           <span className='mr-2 text-sm font-medium text-green-500'>
    //             vaibhavkhulbe
    //           </span>
    //           <span className='text-xs text-gray-500'>19/05/2023</span>
    //         </p>
    //         <p className='text-gray-300'>
    //           Hey everyone! 👋 I'm Vaibhav, a full-time freelance web developer,
    //           designer and blogger. I just got a lifetime membership of BuildUI
    //           because I really like the topics and the tech you guys cover. I
    //           use Tailwind, Next etc, regularly so that's a plus and I want to
    //           learn Framer Motion and other topics from Sam and others in this
    //           team.
    //         </p>
    //       </div>
    //     </div>
    //     <div className='mt-1 px-4 py-1 hover:bg-gray-800 hover:bg-opacity-30'>
    //       <p className='pl-14 text-gray-300'>
    //         Hi! Will we see future videos recorded at 4K quality? These days
    //         many code tutorials use 4K to offer the highest quality, right now
    //         this platform has 1080p which is fine and works but I think adding
    //         4K will be the best! 😄
    //       </p>
    //     </div>
    //     <div className='mt-1 px-4 py-1 hover:bg-gray-800 hover:bg-opacity-30'>
    //       <p className='pl-14 text-gray-300'>
    //         I'm currently starting with Discord clone with Next.js and Tailwind
    //         CSS. Excited for it! 🤩
    //       </p>
    //     </div>
    //   </div>
    // </div>
    <div className='flex h-screen text-white'>
      <div className='bg-gray-800 p-4'>
        <div className='flex h-12 w-12 items-center justify-center rounded-full bg-white text-gray-800'>
          TW
        </div>
      </div>
      <div className='flex w-60 flex-col bg-gray-700'>
        <div className='p-4 shadow-md'>Tailwind CSS</div>
        <div className='flex-1 p-4'>Channels</div>
      </div>
      <div className='flex flex-1 flex-col bg-gray-600'>
        <div className='p-4 shadow-md'>General</div>
        <div className='flex-1 p-4'>Messages</div>
      </div>
    </div>
  );
}
