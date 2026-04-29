import { Button, Chip } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BiDownload } from 'react-icons/bi';

const ShowPhotos = ({ photo }) => {
  // console.log(photo);
  return (
    <div className="border-2 border-gray-400 p-3 rounded-2xl ">
      <div className="relative w-full aspect-square" key={photo.id}>
        <Image
          src={photo.imageUrl}
          fill
          sizes="(max-width:768px) 100vw, (max-width: 1200px)"
          className="object-cover rounded-2xl"
          alt="ok"
        ></Image>
        <Chip className="absolute top-3 right-4">{photo.category}</Chip>
      </div>
      <h2>{photo.title}</h2>
      <div className="flex items-center gap-3">
        <BiDownload></BiDownload>
        <p>{photo.downloads}</p>
      </div>
      <Link href={`photo/${photo.id}`}>
        <Button className="w-full" variant="outline">
          Details
        </Button>
      </Link>
    </div>
  );
};

export default ShowPhotos;