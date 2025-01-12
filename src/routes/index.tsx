import BoostableBossesList from "@/modules/BoostableBossesList";
import CreaturesList from "@/modules/CreaturesList";
import { createFileRoute } from "@tanstack/react-router";
import { Sword, Swords } from "lucide-react";

export const Route = createFileRoute('/')({
  component: Home
})

function Home () {
  return (
    <main className="w-11/12 m-auto pt-20 space-y-10">
      <section>
        <h1 className="text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500 text-2xl font-bold sm:text-4xl mb-2">Informações do Tibia</h1>
        <p className="text-center font-semibold text-muted-foreground sm:text-lg">
          Tibia Info é uma ferramenta simples para acessar informações básicas do Tibia de forma prática. 
        </p>
        <p className="text-center font-semibold text-muted-foreground sm:text-lg">
          Acompanhe detalhes sobre mundos, guildas, boosts diários, e muito mais.
        </p>
      </section>
      <section className="bg-muted p-5 rounded-lg">
        <h2 className="font-bold text-2xl mb-10 text-center text-gray-900 dark:text-muted-foreground">Boostable Bosses</h2>
        <div>
          <BoostableBossesList />
        </div>
        <div className="mt-7 flex justify-center">
          <a 
            href="/boostable-bosses" 
            className="bg-emerald-500 text-white rounded-md py-2 px-7 inline-flex items-center space-x-3 font-semibold"
          >
            <Swords size={20} />
            <span>Ver mais</span>
          </a>
        </div>
      </section>
      <section className="bg-muted p-5 rounded-lg">
        <h2 className="font-bold text-2xl mb-10 text-center text-gray-900 dark:text-muted-foreground">Creatures</h2>
        <div>
          <CreaturesList />
        </div>
        <div className="mt-7 flex justify-center">
          <a 
            href="/creatures" 
            className="bg-cyan-500 text-white rounded-md py-2 px-7 inline-flex items-center space-x-3 font-semibold"
          >
            <Sword size={20} />
            <span>Ver mais</span>
          </a>
        </div>
      </section>
    </main>
  )
}

export default Home
