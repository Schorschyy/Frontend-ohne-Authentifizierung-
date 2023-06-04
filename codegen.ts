import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
    schema: './schema.graphql',
    documents: ['src/**/*.ts'],
    ignoreNoDocuments: true, // for better experience with the watcher
    generates: {
        './src/__generated__/': {
            preset: 'client',
            config: {
                useTypeImports: true
            },
            plugins: []
        }
    }
}

export default config