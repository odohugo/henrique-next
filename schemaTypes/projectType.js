import { defineField, defineType } from "sanity";

export const projectType = defineType({

    name: 'project',
    title: 'Project',
    type:'document',
    fields: [
        defineField({
            name: 'title',
            type: 'string'
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
              },
        }),
        defineField({
            name: 'date',
            type: 'date'
        }),
        defineField({
            name: 'description',
            type: 'string'
        }),
        defineField({
            name: 'body',
            type: 'blockContent',
        }),
        defineField({
            name: 'mainImage',
            type: 'image'
        }),
    ]
})