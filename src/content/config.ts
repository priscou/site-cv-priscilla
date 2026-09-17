import { defineCollection, z } from 'astro:content';

const profil = defineCollection({
  type: 'content',
  schema: z.object({
    nom: z.string(),
    titre: z.string(),
    accroche: z.string(),
    anneesExperience: z.string(),
    email: z.string(),
    linkedin: z.string().optional(),
    x: z.string().optional(),
    cvUrl: z.string().optional(),
    competences: z.array(
      z.object({
        categorie: z.string(),
        items: z.array(z.string()),
      })
    ),
    langues: z.array(
      z.object({
        nom: z.string(),
        niveau: z.string(),
      })
    ),
  }),
});

const experiences = defineCollection({
  type: 'content',
  schema: z.object({
    employeur: z.string(),
    poste: z.string(),
    periode: z.string(),
    ordre: z.number().optional().default(99),
    publie: z.boolean().optional().default(true),
  }),
});

const temoignages = defineCollection({
  type: 'content',
  schema: z.object({
    nom: z.string(),
    role: z.string().optional(),
    note: z.number().min(1).max(5).optional().default(5),
    ordre: z.number().optional().default(99),
    publie: z.boolean().optional().default(true),
  }),
});

export const collections = { profil, experiences, temoignages };
