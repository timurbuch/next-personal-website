import { defineConfig } from 'sanity'
import {deskTool} from 'sanity/desk'
import project from './sanity/schema/project-schema';

const config = defineConfig({
    projectId: 'l2yq8lmm',
    dataset: 'production',
    title: 'next-sanity-studio',
    apiVersion: '2023-09-23',
    basePath: '/admin', 
    plugins: [deskTool()],
    schema: {types: [project]}
})

export default config;