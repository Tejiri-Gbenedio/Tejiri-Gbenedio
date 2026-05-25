'use client'
import SectionHeading from '@/components/ui/SectionHeading'
import ProjectCard from '@/components/ui/ProjectCard'
import { projects } from '@/data'

export default function Projects() {
  const portraitId = 4
  const gridProjects = projects.filter(p => p.id !== portraitId)
  const portraitProject = projects.find(p => p.id === portraitId)

  return (
    <section id="projects" className="py-24 px-6" style={{ background: '#F8F7F4' }}>
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="Featured Work"
          title="Projects That Drive Results"
          subtitle="Each project is a full case study — the client's need, my solution, and the outcome."
        />

        {/* Regular 2-col grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
          {gridProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Mama Tee — full-width portrait card */}
        {portraitProject && (
          <ProjectCard project={portraitProject} index={gridProjects.length} portrait />
        )}
      </div>
    </section>
  )
}
