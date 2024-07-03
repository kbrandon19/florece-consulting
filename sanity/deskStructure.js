export const deskStructure = (S, context) =>
  S.list()
    .title("Florece Studio")
    .items([
      S.listItem()
        .title("Navigation Section")
        .child(S.editor().schemaType("header").documentId("header")),
      S.listItem()
        .title("Hero Section")
        .child(S.editor().schemaType("hero").documentId("hero")),
      S.listItem()
        .title("Consulting Info Section")
        .child(S.editor().schemaType("business").documentId("business")),
      S.listItem()
        .title("About Section")
        .child(S.editor().schemaType("about").documentId("about")),
      S.listItem()
        .title("Work History Section")
        .child(S.editor().schemaType("portfolio").documentId("portfolio")),
      S.listItem()
        .title("Featured Media Section")
        .child(S.editor().schemaType("featured").documentId("featured")),
      S.listItem()
        .title("Contact Section")
        .child(S.editor().schemaType("contact").documentId("contact")),
      S.listItem()
        .title("Footer Section")
        .child(S.editor().schemaType("footer").documentId("footer")),

      S.divider(),

      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            "header",
            "hero",
            "business",
            "about",
            "portfolio",
            "featured",
            "contact",
            "footer",
          ].includes(listItem.getId())
      ),
    ]);
