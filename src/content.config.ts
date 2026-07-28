import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 1. Skema Proyek Portofolio
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    year: z.string(),
    tech_stack: z.array(z.string()),
    featured: z.boolean().default(false),
    category: z.string().default('Web Development'),
    demo_url: z.string().optional(),
    github_url: z.string().optional(),
    image: z.string().optional(),
  }),
});

// 2. Skema Sertifikat
const certificates = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/certificates' }),
  schema: z.object({
    title: z.string(),
    issuer: z.string(),
    year: z.string(),
    skills: z.array(z.string()),
    pdf_path: z.string(),
    credential_url: z.string().optional(),
  }),
});

export const collections = {
  projects,
  certificates,
};
