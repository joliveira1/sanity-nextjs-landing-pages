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
                  buildHookId: '6193be9227216b1472ec11ad',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-4s8b8jk4',
                  apiId: 'd8cacc51-4fda-4783-b50d-a2d3646eaa2e'
                },
                {
                  buildHookId: '6193be9282570b1101062c0d',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-e7dsujmb',
                  apiId: '31a1c4cc-c878-4e5a-963a-4343f2665051'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/joliveira1/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-e7dsujmb.netlify.app', category: 'apps'}
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
