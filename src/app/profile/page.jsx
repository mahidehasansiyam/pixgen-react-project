'use client';
import ProfileModal from '@/components/ProfileModal';
import { authClient } from '@/lib/auth-client';
import { Avatar } from '@heroui/react';

const ProfilePage = () => {
  const { data: session } = authClient.useSession();

  console.log(session?.user.name, session?.user.image);

  return (
    <div>
      {/* <Avatar>
        <Avatar.Image
          alt="oh"
          src={session?.user.image}
          referrerPolicy="no-referrer"
        >
          <Avatar.Fallback>
            {session?.user?.name ? session.user.name[0] : 'U'}
          </Avatar.Fallback>
        </Avatar.Image>
      </Avatar>
      <div>{session?.user.email}</div> */}
      <ProfileModal></ProfileModal>
    </div>
  );
};

export default ProfilePage;
