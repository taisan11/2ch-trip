import {nodelessPlugin} from './nodelessBuildPlugin.ts'

async function build() {
    const a = await Bun.build({
        entrypoints:['src/index.ts'],
        outdir: './dist',
        minify: true,
        format: 'esm',
        plugins: [nodelessPlugin],
    })
}
build()