
export interface ProjectFile {
  id: string;
  name: string;
  content: string;
  path: string;
}

export interface ProjectState {
  name: string;
  githubUrl: string;
  files: ProjectFile[];
}

export interface AnalysisResult {
  summary: string;
  technologies: string[];
  suggestions: string[];
}
