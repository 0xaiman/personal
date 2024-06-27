import Profile from "../components/Profile";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";
import { Timeline } from "../components/Timeline";



export const Home = () => {
    return (
    <div className="h-fit bg-slate-900">
        <div className="bg-slate-100 w-4/5 md:w-3/4 mx-auto">
        <Profile/> 
        <Skills/>
        <Timeline/>
        <Projects/>
        

        </div>
        

       
    </div>
    );
};
