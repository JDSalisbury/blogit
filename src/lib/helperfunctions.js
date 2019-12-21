// eslint-disable-next-line arrow-parens
// eslint-disable-next-line import/prefer-default-export
export const listToString = list => list.join(', ');

export const vanish = textBody => `${textBody.substring(0, 290)}...`;
export const scrollToTop = () => window.scrollTo(0, 0);
