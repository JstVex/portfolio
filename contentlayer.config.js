import { defineDocumentType, makeSource } from 'contentlayer/source-files'

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
    slug: {
        type: "string",
        resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
    slugAsParams: {
        type: "string",
        resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
    },
}

export const Project = defineDocumentType(() => ({
    name: "Project",
    filePathPattern: "projects/*.mdx",
    contentType: "mdx",
    fields: {
        title: {
            type: 'string',
            required: true
        },
        year: {
            type: 'date',
            required: true
        },
        image: {
            type: 'string',
            required: true
        },
        description: {
            type: 'string',
            required: true
        },
        variety: {
            type: 'enum',
            options: ['featured', 'in-development', 'frontend'],
            required: true
        },
        github: {
            type: 'string',
            required: true
        },
        link: {
            type: 'string'
        },
        techStack: {
            type: 'list',
            of: { type: 'string' }
        }
    },
    computedFields
}))

export const Writing = defineDocumentType(() => ({
    name: "Writing",
    filePathPattern: "writing/*.mdx",
    contentType: "mdx",
    fields: {
        title: {
            type: 'string',
            required: true
        },
        date: {
            type: 'date',
            required: true
        },
        description: {
            type: 'string',
            required: true
        },
        image: {
            type: 'string'
        },
        variety: {
            type: 'enum',
            options: ['career', 'thoughts'],
            required: true
        }
    },
    computedFields
}))

export default makeSource({
    contentDirPath: "./content",
    documentTypes: [Project, Writing]
})