
const frontendSkills =[
    "HTML", "CSS","Javascript","Tailwind", "Bootstrap","Reactjs"
]

const backendSkills =[
    "Nodejs", "Expressjs","PostgresSQL","Firebase", "Bootstrap","bcrypt","jsonwebtoken","multer"
]

const miscSkills =[
    "Git Version Controller", "Github"
]

export const  Skills = () => {
  return (
         
        <div className="mx-auto px-1 md:px-8 mt-6">
              <div className="text-center my-3">
                <h1 className="text-3xl text-gray-800 font-semibold">
                    Skills
                </h1>
                <p className="mt-3 text-gray-500">
                    Mainly focused on Web Development  - PERN/MERN 
                </p>
            </div>
            <div className="flex flex-col gap-6">
                <div id="frontend-skills">
                <h1 className="text-2xl font-semibold mb-2">Frontend Skills</h1>
                    <ul className="flex flex-row flex-wrap gap-1 mt-1">
                        {
                            frontendSkills.map((item,key)=>(
                                <li key={key} className="border border-black  px-5 py-3 hover:bg-black hover:text-white">{item}</li>
                            ))
                        }
                    </ul>
                </div>
                <div id="backend-skills ">
                <h1 className="text-2xl font-semibold mb-2">Backend Skills</h1>
                    <ul className="flex flex-row flex-wrap gap-1 mt-1">
                    {
                            backendSkills.map((item,key)=>(
                                <li key={key} className="border border-black  px-5 py-3  hover:bg-black hover:text-white">{item}</li>
                            ))
                        }
                    </ul>
                </div>
                <div id="misc-skills">
                <h1 className="text-2xl font-semibold mb-2">Misc</h1>
                    <ul className="flex flex-wrap gap-1 mt-1">
                    {
                            miscSkills.map((item,key)=>(
                                <li key={key} className="border border-black  px-5 py-3  hover:bg-black hover:text-white">{item}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
           
        </div>
    
    
  )
}
