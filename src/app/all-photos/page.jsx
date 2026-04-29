import ShowCategory from '@/components/ShowCategory';
import ShowPhotos from '@/components/ShowPhotos';
import { getAllCategory, getAllData } from '@/data/page';
import React from 'react';

const AllPhotos =async () => {

  const allData = await getAllData();
  // console.log(allData);
  
  const allCategory = await           getAllCategory();  
    // console.log(allCategory);


  return (
    <div className="max-w-7xl mx-auto">
      <div>
        <h2>Categories</h2>
        <div className="">
          <ShowCategory allCategory={allCategory}></ShowCategory>
        </div>
      </div>

      <div className="mt-5">
        <div className="grid grid-cols-4 gap-4">
          {allData.map(photo => {
            return (
              <div key={photo.id} className="">
                <ShowPhotos photo={photo}></ShowPhotos>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AllPhotos;