export const PointsCouter = (points, pages) => {
  points = 0;
  let pageElement = [];
  pages.forEach((page, index) => {
    pageElement = pageElement.concat(page.elements);
  });
  pageElement.forEach((element) => {
    if (element.points) {
      points += Number(element.points);
    }
  });
  return points;
};
