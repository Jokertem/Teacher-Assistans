export const PagesNumerator = (pages) => {
  pages.forEach((page, index) => {
    page.name = `Strona ${index + 1}`;
  });
  return pages;
};
