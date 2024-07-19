export const deskStructure = (S, context) =>
  S.list()
    .title("Florece Studio")
    .items([
      S.listItem()
      .title("Coming Soon Page")
      .child(S.editor().schemaType("comingsoon").documentId("comingsoon")),
      S.listItem()
        .title("Navigation")
        .child(S.editor().schemaType("header").documentId("header")),
      S.listItem()
        .title("Hero Section")
        .child(S.editor().schemaType("hero").documentId("hero")),
        S.listItem()
        .title("Banner Section")
        .child(S.editor().schemaType("banner").documentId("banner")),
      S.listItem()
        .title("Florece Consulting Bio Section")
        .child(S.editor().schemaType("business").documentId("business")),
        S.listItem()
        .title("Vision and Symbol Logo")
        .child(S.editor().schemaType("symbolism").documentId("symbolism")),
      S.listItem()
        .title("About Section")
        .child(S.editor().schemaType("about").documentId("about")),
      S.listItem()
        .title("Publications Section")
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
            "symbolism",
            "about",
            "featured",
            "contact",
            "footer",
            'comingsoon',
            'banner'
          ].includes(listItem.getId())
      ),
    ]);
