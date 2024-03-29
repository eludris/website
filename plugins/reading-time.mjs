import getReadingTime from 'reading-time';
import { toString } from 'mdast-util-to-string';

export default () => {
  return (tree, { data }) => {
    const textOnPage = toString(tree);
    const readingTime = getReadingTime(textOnPage);
    data.astro.frontmatter.minutesRead = readingTime.text.replace(/min/gm, 'minute');
    data.astro.frontmatter.words = readingTime.words;
  };
}
