import { cn } from "@/utils/cn"
import { Separator } from "../Separator"
import Item, { ItemProps } from "./item"

interface BoostableAndCreaturesProps {
  boosted: ItemProps
  list: ItemProps[]
  titleColor: 'cyan' | 'emerald'
  limit?: number
}

const BoostableAndCreatures = ({ boosted, list, limit, titleColor }: BoostableAndCreaturesProps) => {
  return (
    <div>
      <div className="flex justify-center">
        <div>
          <h3
            className={cn(
              "mb-4 text-xl font-semibold text-center",
              titleColor === "cyan" && "text-cyan-500",
              titleColor === "emerald" && "text-emerald-500"
            )}
          >
            Especial
          </h3>
          <Item image_url={boosted.image_url} name={boosted.name} />
        </div>
      </div>

      <Separator className="my-5 bg-muted-foreground" />

      <ul className="flex flex-wrap items-center justify-center gap-4">
        {limit ? (
          list.slice(0, limit).map(item => (
            <li key={item.name}>
              <Item 
                image_url={item.image_url}
                name={item.name}
              />
            </li>
          ))
        ) : (
          list.map(item => (
            <li key={item.name}>
              <Item 
                image_url={item.image_url}
                name={item.name}
              />
            </li>
          ))
        )}
      </ul>
    </div>
  )
}

export default BoostableAndCreatures
