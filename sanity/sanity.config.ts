import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemaTypes";

export default defineConfig({
  name: "ecommerce-template",
  title: "Ecommerce Template",

  projectId: "vxcg49sd",
  dataset: "production",

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});
