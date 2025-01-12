import { useGetCreatures } from "@/hooks/use-get-tibia-data"
import AvatarSkeleton from "@/components/ui/AvatarSkeleton"
import BoostableAndCreatures from "@/components/ui/BoostableAndCreatures"

const CreaturesList = () => {
  const { data } = useGetCreatures()

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
        boosted={data.creatures.boosted}
        list={data.creatures.creature_list}
        titleColor="cyan"
        limit={7}
      />
    </>
  )
}

export default CreaturesList
