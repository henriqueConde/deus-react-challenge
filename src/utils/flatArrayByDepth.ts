export const flatArrayByDepth = (arr: any[], depth: number) => {
  return arr.flatMap((item) => item).flat(depth);
};
