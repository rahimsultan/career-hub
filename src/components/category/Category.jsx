import { useLoaderData } from "react-router-dom";

export function Category() {
  const category = useLoaderData();
  // console.log(category);
  return (
    <div className="mx-auto max-w-7xl px-2 lg:px-8 my-32">
        <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Job Category List</h2>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
        </div>
      <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
        {
          category.map(cat=>{
            return (
              <div key={cat.id} className="bg-gradient p-5 rounded-md">
                <div className="flex h-20 w-20 items-center justify-center rounded-lg icon-bg">
                  <img src={cat.logo} alt="" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-black">{cat.category_name}</h3>
                <p className="mt-1 text-sm text-gray-600">
                {cat.availability}
                </p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}