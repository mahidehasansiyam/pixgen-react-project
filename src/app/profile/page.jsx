'use client';
import ProfileModal from '@/components/ProfileModal';
import { authClient } from '@/lib/auth-client';
import { Avatar } from '@heroui/react';

const ProfilePage = () => {
  const { data: session } = authClient.useSession();

  console.log(session?.user.name, session?.user.image);

  return (
    <div className="flex justify-center items-center h-[80vh]">
      <div className=" bg-gray-100 p-8 rounded-2xl flex flex-col gap-3 text-center">
        <div className='flex justify-center items-center'>
          <Avatar>
            <Avatar.Image
              alt="oh"
              src={session?.user.image}
              referrerPolicy="no-referrer"
            >
              {/* <Avatar.Fallback>
            {session?.user?.name.charAt(0).toUpperCase()}
          </Avatar.Fallback>  */}
            </Avatar.Image>
          </Avatar>
        </div>
        <div>{session?.user.email}</div>
        <ProfileModal></ProfileModal>
      </div>
    </div>
  );
};

export default ProfilePage;
