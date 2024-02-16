export const actions = {
  nuxtServerInit(storeContext, nuxtContext) {
    storeContext.commit('뮤테이션 함수명')
    if (process.server) {
      const { req, res, beforeNuxtRender } = nuxtContext
    }
  },
}
