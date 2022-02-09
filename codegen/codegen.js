module.exports = {
    overwrite: true,
    schema: 'API_URL',
    headers: {
        Authorization: 'token'
    },
    generates: {
        'schema/schema.json': {
            plugins: ['introspection'],
            config: {
                minify: false,
            },
        },
        'schema/schema.graphql': {
            plugins: ['schema-ast'],
        },
        'src/apollo/introspection-result.ts': {
            hooks: {
                afterOneFileWrite: ['prettier --write', 'eslint --fix'],
            },
            plugins: ['fragment-matcher'],
        },
    },
    config: {
        namingConvention: 'keep',
    },
};