import { CanActivateFn } from '@angular/router'

export const AuthGuard: CanActivateFn = (route) => {
  const routePath = route.url.at(0)

  if (routePath && routePath.path === 'forecast' && !route.params['id']) {
    return false
  }

  return true
}
