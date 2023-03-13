import { createContext, useState, useContext } from "react";

export const TranslationContext = createContext(null);

const en = {
  filter: "Filter",
  form: {
    addNewExpense: "Add New Expense",
    add: "Add",
    cancel: "Cancel",
  },
};

const vi = {
  filter: "Lọc",
  form: {
    addNewExpense: "Thêm khoản chi",
    add: "Thêm",
    cancel: "Hủy",
  },
};

export const dictionary = {
  en,
  vi,
};

export const TranslationProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState("en");

  return (
    <TranslationContext.Provider
      value={{ currentLanguage, setCurrentLanguage }}
    >
      {children}
    </TranslationContext.Provider>
  );
};

export function useTranslation() {
  const { currentLanguage, setCurrentLanguage } =
    useContext(TranslationContext);

  const translate = (key) => {
    if (!dictionary[currentLanguage]) {
      return `[${key}]`;
    }

    const word = key
      .split(".")
      .reduce(
        (previous, current) => previous[current],
        dictionary[currentLanguage]
      );

    if (word) {
      return word;
    }
    return `[${key}]`;
  };

  return {
    translate,
    currentLanguage,
    setCurrentLanguage,
  };
}
