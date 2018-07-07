export default [
    {
      type: 'Row',
      children: [
        { type: 'Box', flex: '2', icon: 'writing', label: 'writing', to: '/writing', modifiers: [], },
        { type: 'Box', flex: '3', icon: 'speaking', label: 'speaking', to: 'speaking', modifiers: [], },
      ]
    },
    {
      type: 'Row',
      children: [
        {
          type: 'Container', flex: '3',
          children: [
            { type: 'Box', flex: '2', icon: 'about', label: 'about', to: '/about', modifiers: ['hero'], },
            { type: 'Row', children: [
                { type: 'Box', flex: '1', icon: 'github', external: true, label: 'github', to: 'https://github.com/alanbsmith', },
                { type: 'Box', flex: '1', icon: 'recipes', label: 'recipes', to: '/recipes', modifiers: [], },
              ]
            },
          ],
        },
        {
          type: 'Container', flex: '1',
          children: [
            { type: 'Box', flex: '1', icon: 'openSource', label: 'open source', to: '/opensource', modifiers: [], },
            { type: 'Box', flex: '2', icon: 'design', label: 'design', to: '/design', modifiers: [], },
          ]
        },
      ]
    },

    {
      type: 'Row',
      children: [
        { type: 'Box', flex: '3', icon: 'twitter', external: true, label: 'github', to: 'https://twitter.com/_alanbsmith', modifiers: [], },
        { type: 'Box', flex: '2', icon: 'medium', external: true, label: 'medium', to: 'https://medium.com/@_alanbsmith', modifiers: [], },
      ]
    },
    {
      type: 'Row',
      children: [
        { type: 'Box', flex: '1', icon: 'email', external: true,  label: 'email', to: 'mailto:a.bax.smith@gmail.com?Subject=Hi!', modifiers: [], },
        { type: 'Box', flex: '3', icon: 'tinyletter', external: true, label: 'tinyletter', to: 'https://tinyletter.com/alanbsmith', modifiers: [], },
      ]
    },
];
