import { Analysis, JournalEntry } from '@prisma/client';

// Note: When Prisma generates types from your schema, it only generates required fields.
// In this case, you can define a type that includes the relation to that optional property.
// https://www.prisma.io/docs/concepts/components/prisma-client/advanced-type-safety/operating-against-partial-structures-of-model-types#problem-using-variations-of-the-generated-model-type

declare global {
  type JournalEntryWithAnalysis = {
    analysis: Analysis;
  } & JournalEntry;
}
