export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5da9ff285a2e42c243307cc6',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-ukztmj4b',
                  apiId: 'ccf8c469-1377-4d55-a5e2-446001161ea0'
                },
                {
                  buildHookId: '5da9ff29538521c44924c20c',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-u66fk4ct',
                  apiId: '516a1a6a-e1f3-483e-a50f-f19cd7342163'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/laniywh/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-u66fk4ct.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
