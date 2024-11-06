import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Innhold")
    .items([
      S.listItem()
        .title("Timeplan")
        .child(S.documentTypeList("schedule").title("Timeplan")),
      S.listItem()
        .title("Skolekarate")
        .child(S.documentTypeList("schools").title("Skolekarate")),
      S.divider(),
      S.documentTypeListItem("post").title("Posts"),
      S.documentTypeListItem("category").title("Categories"),
      S.documentTypeListItem("author").title("Authors"),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() &&
          !["schedule", "post", "category", "author", "schools"].includes(
            item.getId()!
          )
      ),
    ]);
