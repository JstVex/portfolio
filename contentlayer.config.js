import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypePrettyCode from "rehype-pretty-code"
import rehypeSlug from "rehype-slug"

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
        },
        published: {
            type: 'boolean',
            default: true
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
        },
        published: {
            type: 'boolean',
            default: true
        }
    },
    computedFields
}))

export default makeSource({
    contentDirPath: "./content",
    documentTypes: [Project, Writing],
    mdx: {
        rehypePlugins: [
            rehypeSlug,
            [
                rehypePrettyCode,
                {
                    theme: "github-dark",
                    onVisitLine(node) {
                        if (node.children.length === 0) {
                            node.children = [{ type: "text", value: " " }]
                        }
                    },
                    onVisitHighlightedLine(node) {
                        node.properties.className.push("line--highlighted")
                    },
                    onVisitHighlightedWord(node) {
                        node.properties.className = ["word--highlighted"]
                    },
                },
            ],
            [
                rehypeAutolinkHeadings,
                {
                    properties: {
                        className: ["subheading-anchor"],
                        ariaLabel: "Link to section",
                    },
                },
            ],
        ],
    },
})