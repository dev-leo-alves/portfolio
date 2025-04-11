import { Box } from "@chakra-ui/react"
import { ProjectCardStyles } from "./styles";

interface IProjectCardProps {
  title: string;
  description: string;
  img: string;
  url: string;
}

export function ProjectCard({ title, description, img, url }: IProjectCardProps) {

  return (
    <ProjectCardStyles>
      <Box className="container" bgImg={img}>
          
          <div className="content">
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
                <button>Saiba mais</button>
                <a href={url}><button>Acessar projeto</button></a>
            </div>
          </div>
      </Box>
    </ProjectCardStyles>

  );
}