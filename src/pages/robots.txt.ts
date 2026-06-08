const siteUrl = 'https://alexander-zagaynov.com'

export function GET() {
  return new Response(
    [
      'User-agent: *',
      'Allow: /',
      '',
      `Sitemap: ${siteUrl}/sitemap-index.xml`,
      '',
    ].join('\n'),
    {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
      },
    },
  )
}
