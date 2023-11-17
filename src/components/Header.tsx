import { ModeToggle } from "@/components/ModeToggle";
import  {MainMenu} from "@/components/MainMenu";

export const Header = () => {
 
    return (
        <div id="header" className="z-50 flex w-full border-b-4 dark:border-slate-50 border-slate-800 h-16 backdrop-blur-lg fixed ">   
            <div className="pl-5 flex flex-wrap flex-row content-center w-4/12">        
            <ModeToggle />
            <MainMenu />    
            </div>
        </div>

)};