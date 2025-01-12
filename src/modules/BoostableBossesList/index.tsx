import { useGetBoostableBosses } from "@/hooks/use-get-tibia-data"
import AvatarSkeleton from "@/components/ui/AvatarSkeleton"
import BoostableAndCreatures from "@/components/ui/BoostableAndCreatures"

const BoostableBossesList = () => {
  const { data } = useGetBoostableBosses()

  if(!data) {
    return (
      <div className="flex items-center flex-wrap space-x-4">
        {Array.from({ length: 5 }).map(() => <AvatarSkeleton />)}
      </div>
    )
  }

  return (
    <>
      <BoostableAndCreatures 
        boosted={data.boostable_bosses.boosted}
        list={data.boostable_bosses.boostable_boss_list}
        titleColor="emerald"
        limit={7}
      />
    </>
  )
}

export default BoostableBossesList
