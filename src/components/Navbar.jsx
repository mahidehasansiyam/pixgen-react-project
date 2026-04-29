'use client';
import Image from 'next/image';
import Link from 'next/link';
import { authClient } from '@/lib/auth-client';
import { BiUser } from 'react-icons/bi';
import { Button } from '@heroui/react';

const Navbar = () => {

  const habdlesignout =async () => {
    await authClient.signOut();
  }


  const { data: session } = authClient.useSession();
  console.log(session?.user.name,session?.user.image);


  return (
    <div className="border-b px-2">
      <nav className=" flex justify-between items-center  py-3 max-w-7xl mx-auto w-full">
        <div className="flex gap-2 items-center">
          <Image
            src={'/logo.png'}
            alt="logo"
            loading="eager"
            width={30}
            height={30}
            className="object-cover h-auto w-auto"
          />
          <h3 className="font-black text-lg">pixgen.</h3>
        </div>

        <ul className="flex items-center gap-5 text-sm">
          <li>
            <Link href={'/'}>Home</Link>
          </li>
          <li>
            <Link href={'/all-photos'}>All Photos</Link>
          </li>
          <li>
            <Link href={'/pricing'}>Pricing</Link>
          </li>
          <li>
            <Link href={'/profile'}>Profile</Link>
          </li>
        </ul>

        {session ? (
          <div className="flex items-center">
            <ul className="flex items-center gap-4 text-sm">
              <p>{session.user.name}</p>
              <div className="flex  justify-center items-center">
                <Image
                  className="rounded-full"
                  src={session?.user.image}
                  height={30}
                  width={30}
                  alt="ok"
                  referrerPolicy="no-referrer"
                ></Image>
              </div>

              <Button onClick={habdlesignout} variant="outline">
                SignOut
              </Button>
            </ul>
          </div>
        ) : (
          <div className="flex ">
            <ul className="flex items-center gap-4 text-sm">
              
                <Button variant='outline'>
                  {' '}
                  <Link href={'/regester'}>Regestration</Link>
                </Button>
                <Button variant='outline'>
                  {' '}
                  <Link href={'/login'}>Login</Link>
                </Button>
              
              
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
