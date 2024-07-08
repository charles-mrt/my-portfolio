import api from "../api/axios/api"
import { ProjectProps } from "../interfaces/project.interface"


export const getAllProjects = async (): Promise<ProjectProps[]> => {
  try {
    const response = await api.get('/projects')

    if (response.status === 200) {
      return response.data as ProjectProps[]
    } else {
      console.error('API access failed with status:', response.status)
      return []
    }
  } catch (error) {
    console.error('Error accessing API:', error)
    return []
  }
}

export const getProjectById = async ({ id }: { id: ProjectProps['id'] }) => {
  if (id !== '') {
    try {
      const response = await api.get(`/projects/${id}`)
      if (response.status === 200) return response.data
    } catch (error) {
      console.error('Error get proget:', error)
    }
  } else return
}


export const updatedProject = async (id: string, data: ProjectProps) => {
  
  try {
    if (id) {
      const response = await api.patch(`/projects/${id}`, data)
      return response
    }
   } catch (error) {
    console.error('Error updating project')
  }

}