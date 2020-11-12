export default {
  widgets: [
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
                  buildHookId: '5fad17cc0b91337ac746a887',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-8bduvehx',
                  apiId: '9bfe8819-d57c-4f76-a8ab-9262470f192b'
                },
                {
                  buildHookId: '5fad17ccc7d9888c474926fa',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-12q81ie2',
                  apiId: '6aa98d47-5074-4220-974b-3c54eea08928'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/phaiza/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-12q81ie2.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
