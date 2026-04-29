import { Button } from '@heroui/react';
import React from 'react';

const ShowCategory = ({ allCategory }) => {
  // console.log(allCategory);
  return (
    <div className='flex gap-3 flex-wrap my-5'>
      {
        allCategory.map((category) => {
          return (
            <div className="bg" key={category.id}>
              <Button variant='outline'>{category.name}</Button>
            </div>
          );
        })
      }
    </div>
  );
};

export default ShowCategory;