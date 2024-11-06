export const PagesNumerator = (pages) => {
  console.log(pages);

  pages.forEach((page, index) => {
    page.name = `Strona ${index + 1}`;
  });
  return pages;
};
