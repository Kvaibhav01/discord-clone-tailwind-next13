import Link from 'next/link';
import * as Icons from '../../../../components/icons';
import { data } from './../../../../data';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Server() {
  const [closedCategories, setClosedCategories] = useState([]);

  let router = useRouter();
  let server = data.find((server) => +server.id === +router.query.sid);
  let channel = server.categories
    .map((c) => c.channels)
    .flat()
    .find((channel) => +channel.id === +router.query.cid);

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
      {/* Channel selector */}
      <div className='hidden w-60 flex-col bg-gray-800 md:flex'>
        <button className='flex h-12 items-center px-4 font-title text-[15px] text-white shadow-sm transition hover:bg-gray-550/[0.16]'>
          <div className='relative mr-1 h-4 w-4'>
            <Icons.Verified className='absolute h-4 w-4 text-gray-550' />
            <Icons.Check className='absolute h-4 w-4' />
          </div>
          Tailwind CSS
          <Icons.Chevron className='ml-auto h-[18px] w-[18px] opacity-80' />
        </button>

        <div className='flex-1 space-y-[21px] overflow-hidden pt-3 font-medium text-gray-300'>
          {server.categories.map((category) => (
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

      {/* Main content */}
      <div className='flex min-w-0 flex-1 flex-shrink flex-col bg-gray-700'>
        <div className='flex h-12 items-center px-2 shadow-sm'>
          <div className='flex items-center'>
            <Icons.Hashtag className='mx-2 h-6 w-6 font-semibold text-gray-400' />
            <span className='mr-2 whitespace-nowrap font-title text-white'>
              {channel.label}
            </span>
          </div>

          {/* Channel Description */}
          {channel.description && (
            <>
              <div className='mx-2 hidden h-6 w-px bg-white/[0.06] md:block'></div>
              <div className='mx-2 hidden truncate text-sm font-medium text-gray-200 md:block'>
                {channel.description}
              </div>
            </>
          )}

          {/* Mobile Header Desktop */}
          <div className='ml-auto flex items-center md:hidden'>
            <button className='text-gray-200 hover:text-gray-100'>
              <Icons.HashtagWithSpeechBubble className='mx-2 h-6 w-6' />
            </button>
            <button className='text-gray-200 hover:text-gray-100'>
              <Icons.People className='mx-2 h-6 w-6' />
            </button>
          </div>

          {/* Channel Header Desktop */}
          <div className='ml-auto hidden items-center md:flex'>
            <button className='text-gray-200 hover:text-gray-100'>
              <Icons.HashtagWithSpeechBubble className='mx-2 h-6 w-6' />
            </button>
            <button className='text-gray-200 hover:text-gray-100'>
              <Icons.Bell className='mx-2 h-6 w-6' />
            </button>
            <button className='text-gray-200 hover:text-gray-100'>
              <Icons.Pin className='mx-2 h-6 w-6' />
            </button>
            <button className='text-gray-200 hover:text-gray-100'>
              <Icons.People className='mx-2 h-6 w-6' />
            </button>

            <div className='relative mx-2'>
              <input
                type='text'
                placeholder='Search'
                className='h-6 w-36 rounded border-none bg-gray-900 px-1.5 text-sm font-medium placeholder-gray-400'
              />

              <div className='absolute inset-y-0 right-0 flex items-center'>
                <Icons.Spyglass className='mr-1.5 h-4 w-4 text-gray-400' />
              </div>
            </div>

            <button className='text-gray-200 hover:text-gray-100'>
              <Icons.Inbox className='mx-2 h-6 w-6' />
            </button>
            <button className='text-gray-200 hover:text-gray-100'>
              <Icons.QuestionCircle className='mx-2 h-6 w-6' />
            </button>
          </div>
        </div>

        <div className='flex-1 overflow-y-scroll'>
          {channel.messages.map((message, index) => (
            <div key={message.id}>
              {index === 0 ||
              message.user !== channel.messages[index - 1].user ? (
                <MessageWithUser message={message} />
              ) : (
                <Message message={message} />
              )}
            </div>
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

  let server = data.find((server) => +server.id === +router.query.sid);

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
    <Link href={`/servers/${server.id}/channels/${channel.id}`}>
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

function MessageWithUser({ message }) {
  return (
    <div className='mt-[17px] flex py-0.5 pl-4 pr-16 leading-[22px] hover:bg-gray-950/[0.07]'>
      <img
        className='mr-4 mt-0.5 h-10 w-10 rounded-full'
        src={message.avatarUrl}
        alt='Avatar of Adam Wathan'
      />
      <div>
        <p className='flex items-baseline'>
          <span className='mr-2 font-medium text-green-400'>
            {message.user}
          </span>
          <span className='text-xs font-medium text-gray-400'>
            {message.date}
          </span>
        </p>
        <p className='text-gray-100'>{message.text}</p>
      </div>
    </div>
  );
}

function Message({ message }) {
  return (
    <div className='py-0.5 pl-4 pr-16 leading-[22px] hover:bg-gray-950/[0.07]'>
      <p className='pl-14 text-gray-100'>{message.text}</p>
    </div>
  );
}
