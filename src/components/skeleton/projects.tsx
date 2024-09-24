// 1. import skeleton component
// 2. create an array of 3 or any number of items
// 3. map through the array and render the skeleton component
// 4. use the same container styles as the original component
import { Skeleton } from "@/components/ui/skeleton"

export const SkeletonProjects = () => {
	const skeletonArray = Array(10).fill(0); // Adjust the length as needed
  
	return (
	  <div className="grid grid-cols-5 gap-4 py-6 ">
		{skeletonArray.map((_, index) => (
		  <div key={index} className="p-4 rounded shadow">
			  <div className="flex flex-col space-y-3 justify-center items-center">
            <Skeleton className="w-full h-[230px] overflow-hidden rounded-t-3xl" />
             <Skeleton className="h-4 w-[210px] " />
			 <div className="flex items-center gap-4 pb-1">
			 <Skeleton className=" w-[50px] rounded-full" />
			 <Skeleton className="h-4 w-[145px]" />
			 </div>
    </div>
		  </div>
		))}
	  </div>
	);
  };
  
