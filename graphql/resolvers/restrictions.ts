export function toRestrictPosts(isAdmin: string): { active: true } | {} {
  return isAdmin !== "true" 
  ? { active: true }
  : { }
}