
 const Profile = () => {
  return (
    <div className="pt-12 px-1 md:px-8 pb-2  mx-auto rounded-xl">
            <figure>
                <div className="flex flex-col md:flex-row  gap-x-4">
                    <img src="https://via.placeholder.com/150" className="w-40 h-40 mx-auto md:mx-0 rounded-full" alt="Avatar" />
                    <div className=" my-auto ">
                        <span className="block text-3xl text-gray-800 font-semibold">0xaiman</span>
                        <div>
                            <span className="block text-gray-600 text-sm mt-0.5">Graduate Web Developer - MERN</span>
                        <blockquote>
                            <p className=" text-gray-700">
                            I like coding. It's like a logical puzzle. I started coding when I used Finite Simulation Analysis for my Engineering FYP. Then, I discovered Open Bounty Hunts, where I made money for the first time by writing SQL queries to create data analysis dashboards. From there, I fell into the coding rabbit hole, and now I am looking to become a Fullstack MERN web developer.
                            </p>
                        </blockquote>
                        </div>
                    </div>
                </div>
                
            </figure>
        </div>
  )
}

export default Profile
