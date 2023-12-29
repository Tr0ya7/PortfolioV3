import ProjectsCard from './projectsCard'
import ProjectsInformations from '../json/projectsInformations.json' //adicionar mais coisa no json

export default function Projects() {
    return (
        <section className="min-h-[704px] bg-vBlue950 p-10 text-center" id="projects">
            <h1 className="font text-xl md:text-4xl">
                Projetos
            </h1>
            <div className="flex flex-col justify-center items-center">
                <div className="flex justify-around flex-wrap max-w-[795px] vLaptopGScreen:max-w-[795px]">
                    {ProjectsInformations.map((data) => 
                        <ProjectsCard 
                            key={data.id} 
                            image={data.image} 
                            title={data.title} 
                            description={data.informations} 
                            link={data.link} 
                        />
                    )}
                </div>
            </div>
        </section> 
    )
}