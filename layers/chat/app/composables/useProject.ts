export default function useProject(projectId: string) {
  const { projects } = useProjects();

  const project = computed(() => projects.value.find((p) => p.id === projectId));

  function updatedProjectInList(updatedData: Partial<Project>) {
    if (!project.value) return;

    // Merge with existing to update in our data store
    projects.value = projects.value.map((p) => (p.id === projectId ? { ...p, ...updatedData } : p));
  }

  async function updateProject(updatedProject: Partial<Project>) {
    if (!project.value) return;

    const originalProject = { ...project.value };
    updatedProjectInList(updatedProject);

    try {
      const response = await $fetch<Project>(`/api/projects/${projectId}`, {
        method: 'PUT',
        body: {
          ...updatedProject,
        },
      });
      updatedProjectInList(response);
      return response;
    } catch (error) {
      console.error('Error updating project:', error);
      // Revert to original on error
      updatedProjectInList(originalProject);
    }
  }

  return {
    project,
    updateProject,
  };
}
