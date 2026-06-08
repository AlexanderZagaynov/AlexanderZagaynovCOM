const CANONICAL_HOST = "alexander-zagaynov.com";
const REDIRECT_HOST = "alexanderzagaynov.com";

export default {
  fetch(request, env) {
    const url = new URL(request.url);

    if (url.hostname === REDIRECT_HOST) {
      url.hostname = CANONICAL_HOST;
      return Response.redirect(url.toString(), 301);
    }

    return env.ASSETS.fetch(request);
  },
};
