export const TaskNumerator = (pages) => {
  let pageElement = [];
  pages.forEach((page, index) => {
    pageElement = pageElement.concat(page.elements);
  });

  let number = 1;

  for (let index = 0; index < pageElement.length; index++) {
    const element = pageElement[index];
    if (element.points) {
      if (element.title.charAt(1, element.title.length - 1) == ".") {
        element.title = element.title.substring(2);
      }

      element.title = `${number}. ${element.title}`;
      number++;
    }
  }

  return pages;
};
