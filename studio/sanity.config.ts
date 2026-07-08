import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import { singletonStructure } from "./structure";

const projectId = process.env.SANITY_STUDIO_PROJECT_ID ?? "";
const dataset = process.env.SANITY_STUDIO_DATASET ?? "production";

export default defineConfig({
  name: "thread-conference",
  title: "THREAD Conference",

  projectId,
  dataset,

  plugins: [
    structureTool({ structure: singletonStructure }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
});
