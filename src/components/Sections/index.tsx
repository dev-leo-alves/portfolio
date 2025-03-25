import { SectionAbout } from "./About"
import { SectionPortfolio } from "./Portfolio"
import { SectionProfessional } from "./Professional"
import { SectionWelcome } from "./Welcome"
export function Sections(){
    return(<>
        <SectionWelcome />
        <SectionAbout />
        <SectionProfessional />
        <SectionPortfolio/>
    </>)
}