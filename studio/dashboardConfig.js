export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60621721d34b30008ff8f34c',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-jacopo-studio',
                  apiId: '9002f589-3ffb-4cce-8a74-29d821b78653'
                },
                {
                  buildHookId: '6062172188c91300c498fe69',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-jacopo',
                  apiId: 'f5f53503-1aa5-49d2-9f59-3764a97903a5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/eccofatto2/sanity-nextjs-landing-pages-jacopo',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-jacopo.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
