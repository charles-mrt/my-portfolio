import api from "../api/axios/api"
import { ProjectProps } from "../interfaces/project.interface"


export const getAllProjects = async (): Promise<ProjectProps[]> => {
  try {
    const response = await api.get('/projects')

    if (response.status === 200) {
      return response.data as ProjectProps[]
    } else {
      console.error('API access failed with status:', response.status )
      return []
    }
  } catch (error) {
    console.error('Error accessing API:', error)
    return []
  }
}