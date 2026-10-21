import { defineType, defineField } from "sanity";
import { TagIcon } from "@sanity/icons";

export const product = defineType({
  name: "product",
  title: "Product",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({ name: "title", type: "string", title: "Title", validation: (Rule) => Rule.required() }),
    defineField({ name: "slug", type: "slug", title: "Slug", options: { source: "title" }, validation: (Rule) => Rule.required() }),
    defineField({ name: "description", type: "text", title: "Description", rows: 4 }),
    defineField({ name: "priceCents", type: "number", title: "Price (cents)", validation: (Rule) => Rule.required().min(0) }),
    defineField({
      name: "colorway",
      type: "string",
      title: "Placeholder swatch color",
      description: "A CSS color used for the stand-in product visual until real photos are added",
    }),
    defineField({ name: "order", type: "number", title: "Display order" }),
  ],
  orderings: [{ name: "orderAsc", title: "Display order", by: [{ field: "order", direction: "asc" }] }],
});
