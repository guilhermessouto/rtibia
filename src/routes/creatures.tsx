import BoostableAndCreatures from '@/components/ui/BoostableAndCreatures'
import { Skeleton } from '@/components/ui/Skeleton'
import { useGetCreatures } from '@/hooks/use-get-tibia-data'
import { ScrollArea } from '@/components/ui/ScrollArea'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/creatures')({
  component: RouteComponent,
})

function RouteComponent() {
  const { data } = useGetCreatures()

  if(!data) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Skeleton className="w-[150px] h-[150px] rounded-full" />
      </div>
    )
  }

  return (
    <main className='relative top-14'>
      <ScrollArea className='max-w-3xl h-[525px] m-auto'>
        <BoostableAndCreatures 
          boosted={data.creatures.boosted}
          list={data.creatures.creature_list}
          titleColor="emerald"
        />
      </ScrollArea>
    </main>
  )
}
