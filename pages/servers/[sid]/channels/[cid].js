import Link from 'next/link';
import * as Icons from '../../../../components/icons';
import { data } from './../../../../data';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Server() {
  const [closedCategories, setClosedCategories] = useState([]);

  let router = useRouter();
  // console.log('My router', router.query.sid);
  // console.log('The data', data[router.query.sid]?.categories);

  let server = data[`${router.query.sid}`];
  console.log('Server', server);

  let channel = server.categories
    .map((c) => c.channels)
    .flat()
    .find((channel) => +channel.id === +router.query.cid);
  console.log('Channel', channel);

  function toggleCategory(categoryId) {
    setClosedCategories((closedCategories) =>
      // If `categoryId` is found in `closedCategories`, it is removed by filtering out that specific `categoryId` from the array. If `categoryId` is not found in `closedCategories`, it is added to the array.
      closedCategories.includes(categoryId)
        ? closedCategories.filter((id) => id !== categoryId)
        : [...closedCategories, categoryId]
    );
  }

  return (
    <>
      <div className='flex w-60 flex-col bg-gray-800'>
        <button className='flex h-12 items-center px-4 font-title text-[15px] text-white shadow-sm transition hover:bg-gray-550/[0.16]'>
          <div className='relative mr-1 h-4 w-4'>
            <Icons.Verified className='absolute h-4 w-4 text-gray-550' />
            <Icons.Check className='absolute h-4 w-4' />
          </div>
          Tailwind CSS
          <Icons.Chevron className='ml-auto h-[18px] w-[18px] opacity-80' />
        </button>

        <div className='flex-1 space-y-[21px] overflow-y-scroll pt-3 font-medium text-gray-300'>
          {data['1'].categories.map((category) => (
            <div key={category.id}>
              {category.label && (
                <button
                  onClick={() => toggleCategory(category.id)}
                  className='flex w-full items-center px-0.5 font-title text-xs uppercase tracking-wide hover:text-gray-100'
                >
                  <Icons.Arrow
                    className={`${
                      closedCategories.includes(category.id) ? '-rotate-90' : ''
                    } mr-0.5 h-3 w-3 transition duration-200`}
                  />
                  {category.label}
                </button>
              )}
              <div className='mt-[5px] space-y-0.5'>
                {category.channels
                  .filter((channel) => {
                    let categoryIsOpen = !closedCategories.includes(
                      category.id
                    );
                    return categoryIsOpen || channel.unread;
                  })
                  .map((channel) => (
                    <ChannelLink channel={channel} key={channel.id} />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='flex flex-1 flex-col bg-gray-700'>
        <div className='flex h-12 items-center px-3 shadow-sm'>h</div>
        <div className='flex-1 space-y-4 overflow-y-scroll p-3'>
          {[...Array(40)].map((_, index) => (
            <p key={index}>
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

function ChannelLink({ channel }) {
  let Icon = channel.icon ? Icons[channel.icon] : Icons.Hashtag;

  let router = useRouter();
  //? Using `+` to coerce strings to numbers
  let active = +channel.id === +router.query.cid;

  let state = active
    ? 'active'
    : channel.unread
    ? 'inactiveUnread'
    : 'inactiveRead';

  let classes = {
    active: 'text-white bg-gray-550/[0.32]',
    inactiveUnread:
      'text-white hover:bg-gray-550/[0.16] active:bg-gray-550/[0.24]',
    inactiveRead:
      'text-gray-300 hover:text-gray-100 hover:bg-gray-550/[0.16] active:bg-gray-550/[0.24]',
  };

  return (
    <Link href={`/servers/1/channels/${channel.id}`}>
      <a
        className={`${classes[state]} group relative mx-2 flex items-center rounded px-2 py-1`}
      >
        {state === 'inactiveUnread' && (
          <div className='absolute left-0 -ml-2 h-2 w-1 rounded-r-full bg-white '></div>
        )}
        <Icon className='mr-1.5 h-5 w-5 text-gray-400' />
        {channel.label}
        <Icons.AddPerson className='ml-auto h-4 w-4 text-gray-200 opacity-0 hover:text-gray-100 group-hover:opacity-100' />
      </a>
    </Link>
  );
}
