import { SectionAbout } from "./About"
import { SectionPortfolio } from "./Portfolio"
import { SectionProfessionalSkills } from "./ProfessionalSkills"
import { SectionWelcome } from "./Welcome"
export function Sections(){
    return(<>
        <SectionWelcome />
        <SectionAbout />
        <SectionProfessionalSkills />
        <SectionPortfolio/>
    </>)
}