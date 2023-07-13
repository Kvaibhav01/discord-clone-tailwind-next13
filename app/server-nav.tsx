'use client';

import { Discord } from '@/components/icons';
import { data } from '@/data';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import { ReactNode } from 'react';

export default function ServerNav() {
  let params = useParams();
  return (
    <nav className='hidden space-y-2 bg-gray-900 p-3 md:block'>
      <NavLink href='/'>
        <Discord className='h-5 w-7' />
      </NavLink>

      <hr className='mx-2 rounded border-t-2 border-t-white/[0.06]' />

      {data.map((server) => (
        <NavLink
          href={`/servers/${server.id}/channels/${server.categories[0].channels[0].id}`}
          key={server.id}
          active={params.sid === server.id.toString()}
        >
          <Image width={48} height={48} src={`/servers/${server.img}`} alt='' />
        </NavLink>
      ))}
    </nav>
  );
}

function NavLink({
  href,
  children,
  active,
}: {
  href: string;
  children: ReactNode;
  active?: boolean;
}) {
  let pathName = usePathname();
  active ||= pathName === href;

  return (
    <Link href={href} className='group relative block'>
      <div className='absolute -left-3 flex h-full items-center'>
        <div
          className={`${
            active
              ? 'h-10'
              : 'h-5 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100'
          }  w-1 origin-left  rounded-r bg-white transition-all duration-200 `}
        ></div>
      </div>

      <div className='group-active:translate-y-px'>
        <div
          className={`${
            active
              ? 'rounded-2xl bg-brand text-white'
              : 'rounded-3xl bg-gray-700 text-gray-100 group-hover:rounded-2xl group-hover:bg-brand group-hover:text-white'
          } flex h-12 w-12 items-center justify-center overflow-hidden transition-all duration-200`}
        >
          {children}
        </div>
      </div>
    </Link>
  );
}
