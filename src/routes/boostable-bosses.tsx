import BoostableAndCreatures from '@/components/ui/BoostableAndCreatures'
import { ScrollArea } from '@/components/ui/ScrollArea'
import { Skeleton } from '@/components/ui/Skeleton'
import { useGetBoostableBosses } from '@/hooks/use-get-tibia-data'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/boostable-bosses')({
  component: RouteComponent,
})

function RouteComponent() {
  const { data } = useGetBoostableBosses()

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
          boosted={data.boostable_bosses.boosted}
          list={data.boostable_bosses.boostable_boss_list}
          titleColor="emerald"
        />
      </ScrollArea>
    </main>
  )
}
