import { Avatar, AvatarImage } from "@/components/ui/Avatar"

export interface ItemProps {
  name: string
  image_url: string
}

const Item = ({ image_url, name }: ItemProps) => {
  return (
    <div className="w-[100px] flex flex-col items-center">
      <Avatar className="bg-muted-foreground w-[50px] h-[50px]" >
        <AvatarImage
          alt={name} 
          src={image_url}
        >
        </AvatarImage>
      </Avatar>
      <span className="block text-ellipsis overflow-hidden whitespace-nowrap w-full text-center">{name}</span>
    </div>
  )
}

export default Item
