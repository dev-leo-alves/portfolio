import { Box, Flex } from "@chakra-ui/react"
import { ProjectCardStyles } from "./styles";
import { useTranslation } from "react-i18next";

interface IProjectCardProps {
  title: string;
  description: string;
  img: string;
  project_url?: string;
  aos_duration?: number;
}

export function ProjectCard({ title, description, img, project_url, aos_duration }: IProjectCardProps) {
  const [t] = useTranslation("global");
  
  return (
    <div data-aos="flip-right" data-aos-duration={aos_duration} style={{width: "100%", height: "100%"}}>

    
      <ProjectCardStyles >
      
        <Box className="container" bgImg={"url(" + img + ")"}>
            
            <Flex className="content">
              <div className="title">
                <h1>{title}</h1>
              </div>
              <div className="description">
                <h2 className="description-title">
                  {title}
                </h2>
                <p className="description-text"> 
                  {description}
                </p>

                
              </div>
              <div className="buttons">
                  {/* <button>t("section.portfolio.project.button.more_about")</button> */}
                  <a href={project_url} target="_blank" ><button disabled={project_url ? false : true}>{project_url ? t("section.portfolio.project.button.go_to_project") : t("section.portfolio.project.button.development")}</button></a>
              </div>
            </Flex>
        </Box>
      </ProjectCardStyles>
    </div>
  );
}

 