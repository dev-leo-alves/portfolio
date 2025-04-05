import { Box } from "@chakra-ui/react"
import { ProjectCardStyles } from "./styles";

interface IProjectCardProps {
  title: string;
  description: string;
  img: string;
}

export function ProjectCard({ title, description, img}: IProjectCardProps) {

  return (
    <ProjectCardStyles>
      <Box className="container" bgImg={img}>
          <div className="title">
            <h1>{title}</h1>
          </div>
          <div className="content">
            <div className="description">
              <h2 className="description-title">
                {title}
              </h2>
              <p className="description-text"> 
                {description}
              </p>
            </div>
          </div>
      </Box>
    </ProjectCardStyles>

  );
}