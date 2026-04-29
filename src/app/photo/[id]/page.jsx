import { getAllData } from '@/data/page';
import Image from 'next/image';

const page = async ({ params }) => {
  const allData = await getAllData();
  // console.log(allData);

  const { id } = await params;
  // console.log(id);

  const pic = allData.find(i => id == i.id);
  // console.log(pic);
      
  return (
    <div className=" mt-8 flex justify-center items-center ">
      <div className="space-y-4 rounded-2xl p-6 bg-gray-100 text-center ">
        <div className='flex justify-center items-center'>
          <Image src={pic.imageUrl} width={300} height={300} alt="ok"></Image>
        </div>
        <h2>{pic.title}</h2>
        <h2>Prompt = {pic.prompt}</h2>
      </div>
    </div>
  );
};

export default page;
