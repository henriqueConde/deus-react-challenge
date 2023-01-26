export const sortArrayByDate = (arr: any[], prop = '') => {
  const cArr = [...arr];
  // eslint-disable-next-line no-extra-boolean-cast
  if (!!prop) {
    return cArr
      .sort((a, b) => {
        return new Date(a[prop]).getTime() - new Date(b[prop]).getTime();
      })
      .reverse();
  }

  return cArr
    .sort((a, b) => new Date(a).getTime() - new Date(b).getTime())
    .reverse();
};
