({
    block: 'page',
    title: 'Forms examples',
    favicon: 'favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } }
    ],
    styles: [{ elem: 'css', url: '_forms.css' }],
    scripts: [{ elem: 'js', url: '_forms.js' }],
    content:[
        {
            elem: 'header',
            content: [
                {
                    block: 'title',
                    tag: 'h1',
                    content: 'Forms examples'
                }
            ]
        },
        {
            elem: 'content',
            content: [
                {
                    block: 'title',
                    tag: 'h2',
                    content: 'Fieldset'
                },
                {
                    block: 'fieldset',
                    legend: 'title',
                    content: [
                        {
                            block: 'input',
                            mods: {type:'text'},
                            label: 'label'
                        }
                    ]
                }
            ]
        }
    ]
})
