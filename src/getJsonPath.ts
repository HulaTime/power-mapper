export const getJsonPath = <T extends Record<string, unknown>>(jsonPath: string, data: T) => {
  const path: string[] = jsonPath.split('.');
  return path.reduce((acc, pathPart): any => acc[pathPart], data);
} 
