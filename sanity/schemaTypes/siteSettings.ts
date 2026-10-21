import { defineType, defineField } from "sanity";
import { CogIcon } from "@sanity/icons";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  icon: CogIcon,
  fields: [
    defineField({ name: "shopName", type: "string", title: "Shop Name", validation: (Rule) => Rule.required() }),
    defineField({ name: "tagline", type: "text", title: "Tagline", rows: 2 }),
    defineField({ name: "email", type: "string", title: "Support Email" }),
  ],
});
