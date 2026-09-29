const publicPaths = ["/login"];

export default defineNuxtRouteMiddleware(async (to, _from) => {
  if (publicPaths.includes(to.path)) {
    return;
  }
  if (!useUserSession().loggedIn.value) {
    return navigateTo("/login");
  }
});
