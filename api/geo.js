// Vercel Edge Function — returns the visitor's country code from the
// CDN-injected `x-vercel-ip-country` header. Used by index.html to pick
// the default language on first visit (RO -> ro, IT -> it, else -> en).
//
// Response: { "country": "RO" } (empty string when geo data is unavailable,
// e.g. local dev or preview deploys without geo enabled).

export const config = { runtime: 'edge' };

export default function handler(request) {
  const country = request.headers.get('x-vercel-ip-country') || '';
  return new Response(JSON.stringify({ country }), {
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'private, no-store'
    }
  });
}
