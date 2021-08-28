export const validatePaginatedQuery = (from, to) => {
  if (!from || !to) {
    throw new Error("from, to must be greater than zero");
  }
  if (from === to || from > to) {
    throw new Error("to must be greater than from");
  }
};
