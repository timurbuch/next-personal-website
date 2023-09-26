import { defineConfig } from 'sanity'
import {deskTool} from 'sanity/desk'

const config = defineConfig({
    projectId: 'l2yq8lmm',
    dataset: 'production',
    title: 'next-sanity-studio',
    apiVersion: '2023-09-23',
    basePath: '/admin', 
    plugins: [deskTool()]
})

export default config;