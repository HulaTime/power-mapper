export const putJsonPath = <VT, OT extends Record<string, unknown>>
  (jsonPath: string, value: VT, data: OT) => {
  const path: string[] = jsonPath.split('.');
  const output: Record<string, unknown> = { ...data };
  path.reduce((acc, key, idx) => {
    const currentPosition = acc[key];
    if (idx === path.length - 1) {
      acc[key] = value;
      return acc[key];
    }
    if (currentPosition && typeof currentPosition === 'object' && !Array.isArray(currentPosition)) {
      return currentPosition as any;
    }
    acc[key] = {};
    return acc[key];
  }, output);
  return output;
}; 
