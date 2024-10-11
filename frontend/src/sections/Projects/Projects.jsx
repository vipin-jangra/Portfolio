import styles from './ProjectsStyles.module.css';
import chatterBox from '../../assets/chatterBoxlogo.png';

import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={chatterBox}
          link="https://chatterbox-lq8z.onrender.com/"
          h3="Chatter Box"
          p="real-time chat application"
        />
        
      </div>
    </section>
  );
}

export default Projects;
