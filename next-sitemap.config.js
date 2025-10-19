/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://yourname.dev',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/admin/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
}
