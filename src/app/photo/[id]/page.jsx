import { getAllData } from "@/data/page";


const page = async ({ params }) => {
  const allData = await getAllData();
    // console.log(allData);

  const { id } = await params;
  // console.log(id);

  const pic = allData.find((i) =>  id == i.id )
  // console.log(pic);

  return (
    <div>
      nfvdnfv
    </div>
  );
};

export default page;