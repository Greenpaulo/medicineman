export function checkLoading ( resources, loaders) {
  // Check if resources are empty
  const resourcesEmpty = resources.includes(null)
  // Check that resources are not still loading
  const stillLoading = loaders.includes(true);

  if (resourcesEmpty || stillLoading) {
    return true;
  }
  // Else all data is loaded and loaders have completed
  return false;
}