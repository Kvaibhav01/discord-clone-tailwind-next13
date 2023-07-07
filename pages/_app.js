import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Discord } from '../components/icons';
import '../styles/globals.css';
import './../styles.css';
import { data } from '../data';

function MyApp({ Component, pageProps }) {
  let router = useRouter();

  // Avoid first render by returning null if the router is not ready
  if (!router.isReady) {
    return null;
  }

  return (
    <>
      <Head>
        <title>Discord Clone</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='flex h-screen text-gray-100'>
        {/* Server selector */}
        <div className='hidden space-y-2 bg-gray-900 p-3 md:block'>
          <NavLink href='/'>
            <Discord className='h-5 w-7' />
          </NavLink>

          <hr className='mx-2 rounded border-t-2 border-t-white/[0.06]' />

          {data.map((server) => (
            <NavLink
              href={`/servers/${server.id}/channels/${server.categories[0].channels[0].id}`}
              key={server.id}
              active={+router.query.sid === +server.id}
            >
              <img src={`/servers/${server.img}`} alt={server.imgAlt} />
            </NavLink>
          ))}
        </div>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;

function NavLink({ href, children, active }) {
  let router = useRouter();
  //? The statement below is same as: `active = active || router.asPath === href;`
  active ||= router.asPath === href;

  return (
    <Link href={href}>
      <a className='group relative block'>
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
      </a>
    </Link>
  );
}
