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
                  buildHookId: '5fc88cd6d500ccc62c3aae57',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-dycbwkp5',
                  apiId: 'ef3154e1-1dfd-46fa-8fd6-d538e425e20e'
                },
                {
                  buildHookId: '5fc88cd677d234bc84724f8c',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-k7m8ystk',
                  apiId: '7bcca7ae-3a96-4a12-901d-aaa2d1b4c193'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/viru9/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-k7m8ystk.netlify.app', category: 'apps'}
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
