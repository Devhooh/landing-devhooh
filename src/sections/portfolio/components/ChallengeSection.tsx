import Image from "next/image";
import { Project } from "@/data/portfolioDetails";

interface ChallengeSectionProps {
  project: Project;
}

export default function ChallengeSection({ project }: ChallengeSectionProps) {
  return (
    <section className="bg-fuchsia-300 rounded-xl my-10 mx-5 md-tablet:mx-10 py-12 px-4 md-tablet:px-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {project.challengeData.map((item, index) => {
          const isEven = index % 2 !== 0; // para zig-zag
          return (
            <div key={item.title} className="flex flex-col gap-8">
              <h3 className="text-3xl md-tablet:text-5xl font-bold text-gray-800 mb-4 text-center">
                {item.title}
              </h3>

              {/* Contenido en zig-zag */}
              <div
                className={`flex flex-col table-lg:flex-row items-center gap-8 ${
                  isEven ? "table-lg:flex-row-reverse" : ""
                }`}
              >
                {/* Texto */}
                <div className="table-lg:w-1/2 text-center table-lg:text-left">
                  <p className="text-gray-600 text-base md-tablet:text-lg">
                    {item.description}
                  </p>

                  <div className="pt-5 mx-5">
                    {item.listData?.map((items, index) => (
                      <ul 
                        key={index}
                        className="mt-2 list-disc text-gray-600 text-base md-tablet:text-lg"
                      >
                        <li>{items}</li>
                      </ul>
                    ))}
                  </div>
                </div>

                {/* Imagen */}
                <div className="table-lg:w-1/2 flex justify-center">
                  <Image
                    src={item.image}
                    alt={`${item.title} - ${project.projectName}`}
                    width={500}
                    height={300}
                    className="rounded-lg shadow-lg w-72 object-cover"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
