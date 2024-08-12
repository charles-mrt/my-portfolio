
interface ProjectCardSkeletonPros {
  totalCards: number
}

export const ProjectCardSkeleton = ({totalCards}:ProjectCardSkeletonPros) => {

  return (
   
    <ul className="grid justify-items-center gap-4 sm:grid-cols-2 laptop:grid-cols-3">
    {Array.from({ length: totalCards }).map((_, index) => (
      <li
        key={index}
        className="p-2 animate-pulse h-[40rem] w-80 sm:w-72 md:w-[22rem] lg:w-[19.5rem] xl:w-96 2xl:h-[40.6rem] 
                bg-zinc-900 border-2 border-zinc-700 rounded-[5px] z-0 flex flex-col items-center justify-between gap-2"
      >
        <div className="w-full h-[40%] bg-gray-500 rounded-md" />
        <div className="w-1/2 bg-gray-500 h-3 rounded-sm text-center" />
        <div className="w-full h-[40%] flex flex-col justify-between">
          <div className="space-y-2">
            <div className="w-full bg-gray-500 h-3 rounded-sm" />
            <div className="w-11/12 bg-gray-500 h-3 rounded-sm" />
            <div className="w-full bg-gray-500 h-3 rounded-sm" />
            <div className="w-20 bg-gray-500 h-3 rounded-sm" />
          </div>
          <div className="w-full flex justify-between items-end gap-2">
            <div className="h-12 w-full bg-gray-500 rounded-md" />
            <div className="h-12 w-full bg-gray-500 rounded-md" />
          </div>
        </div>
      </li>
    ))}
  </ul>
  )
}