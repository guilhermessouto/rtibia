import { Skeleton } from "../Skeleton"

const AvatarSkeleton = () => {
  return (
    <div className="w-[100px] flex flex-col">
      <Skeleton className="self-center rounded-full w-[50px] h-[50px] mb-2" />
      <Skeleton className="h-[15px]" />
    </div>
  )
}

export default AvatarSkeleton
