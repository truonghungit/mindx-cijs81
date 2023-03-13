import { useTranslation } from "../../Context/TranslationContext";

export default function Footer() {
  const { currentLanguage, setCurrentLanguage } = useTranslation();

  return (
    <footer className="py-4 d-flex justify-content-between align-items-center">
      <p>Expense App - {new Date().getFullYear()}</p>
      <select
        value={currentLanguage}
        onChange={(event) => setCurrentLanguage(event.target.value)}
        className="form-select"
        style={{ width: "80px" }}
      >
        <option value={"vi"}>VI</option>
        <option value={"en"}>EN</option>
        <option value={"fr"}>FR</option>
      </select>
    </footer>
  );
}
