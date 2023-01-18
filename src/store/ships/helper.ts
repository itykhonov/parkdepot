export const filtersAdapter = (
  data: { type: string }[]
): Record<string, number> => {
  return data.reduce(
    (acc: Record<string, number>, next: { type: string }) => {
      if (!acc[next.type]) {
        acc[next.type] = 0;
      }
      acc[next.type] += 1;
      return acc;
    },
    { All: data.length }
  );
};
