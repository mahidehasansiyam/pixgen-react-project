'use client';
import ProfileModal from '@/components/ProfileModal';
import { authClient } from '@/lib/auth-client';
import { Avatar } from '@heroui/react';

const ProfilePage = () => {
  const { data: session } = authClient.useSession();

  console.log(session?.user.name, session?.user.image);

  return (
    <div className="flex justify-center items-center h-[80vh]">
      <div className="  shadow-2xl p-8 rounded-2xl flex flex-col gap-3 text-center">
        <div className="flex justify-center items-center">
          <Avatar className="h-20 w-20">
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
        <h2 className="text-xl font-bold">{session?.user.name}</h2>
        <p className="text-muted">{session?.user.email}</p>
        <div className="">
          <ProfileModal></ProfileModal>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
