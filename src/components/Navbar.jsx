import Image from 'next/image';
import Link from 'next/link';
import { PersonFill } from '@gravity-ui/icons';

const Navbar = () => {
  return (
    <nav className="navbar flex justify-between items-center p-4 bg-white text-black dark:bg-black dark:text-white">
      <div>
        <ul className="flex font-semibold justify-row space-x-5">
          <li><Link href={'/'}>Home</Link></li>
          <li><Link href={'/destinations'}>Destinations</Link></li>
          <li><Link href={'/my-booking'}>My Booking</Link></li>
        </ul>
      </div>
      <div>
        <Image src={'/assets/vayora.png'} alt='logo'
          height={50} width={120}
        ></Image>
      </div>
      <div>
        <ul className="flex font-semibold flex-row space-x-5">
          <li>
            <Link href={'/profile'}>
              <span className='flex justify-center items-center gap-2'>
                <PersonFill /> <p>Profile</p></span>
            </Link>
          </li>
          <li><Link href={'/signup'}>Signup</Link></li>
          <li><Link href={'/login'}>Login</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 