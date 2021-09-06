export const typePlan = ["al mes", "bimestral", "trimestral", "anual"];

export const maskFecExp = "12/34";
export const formatCharsMaskFecExp = {
  1: "[0-1]",
  2: "[0-9]",
  3: "[2]",
  4: "[1-9]",
};

export const expRegular = {
  fullName: /^[a-zA-ZÀ-ÿ\s]{3,60}$/, // Letras y espacios, pueden llevar acentos.
  cvc: /^\d{3}$/,
  fecExp: /^\d{2}\/\d{2}$/,
  cardNum: /^[0-9\s]{19}$/,
};
