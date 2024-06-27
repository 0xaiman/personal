import imgSpmVault from "../assets/projects/portfolio-spmvault.png";
import imgFlipside from "../assets/projects/portfolio-flipside.png"

const posts = [
    {
        title: "SPMVault",
        desc: "This project is a graduation project for a MERN Bootcamp, involving the development of an SPM Past Year Quiz website integrated with data analytics.",
        img: imgSpmVault,
        authorLogo: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
        link:"https://spmvault-web.vercel.app/",
        authorName: "Sidi dev",
        date: "Jan 4 2022",
        href: "javascript:void(0)"
    },
    {
        title: "Data Analysis Portfolio",
        desc: "My past works during my active involvement in the Blockchain Data Analytics bounty hunt. ",
        img: imgFlipside,
        authorLogo: "https://api.uifaces.co/our-content/donated/FJkauyEa.jpg",
        link:"https://flipsidecrypto.xyz/0xaiman/dashboards",
        authorName: "Micheal",
        date: "Jan 4 2022",
        href: "javascript:void(0)"
    }
]

export const Projects = () => {
  return (
    <section className="mt-6 py-12 mx-auto px-1 max-w-screen-xl md:px-8  ">
            <div className="text-center">
                <h1 className="text-3xl text-gray-800 font-semibold">
                    Projects
                </h1>
                <p className="mt-3 text-gray-500">
                    Projects from Bootcamp Graduation Project and personal projects.
                </p>
            </div>
            <div className="mt-12 grid gap-2 sm:grid-cols-1 lg:grid-cols-2 ">
                {
                    posts.map((items, key) => (
                    <div key={key} className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm">
                        <a href={items.link} target="_blank" rel="noopener noreferrer">
                            <img src={items.img} loading="lazy" alt={items.title} className="w-full h-48 object-cover rounded-t-md" />
                            <div className="pt-3 ml-4 mr-2 mb-3">
                                <h3 className="text-xl text-gray-900">{items.title}</h3>
                                <p className="text-slate-500 text-sm mt-1">{items.desc}</p>
                            </div>
                        </a>
                    </div>
                    
                    ))
                }
            </div>
        </section>
  )
}
