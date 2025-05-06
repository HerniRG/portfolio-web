
import React from "react";
import { Heart } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-muted-foreground flex items-center justify-center gap-2">
          {t("footer.madeWith")} <Heart className="w-4 h-4 text-red-500" /> {t("footer.by")} Hernán Rodríguez
        </p>
      </div>
    </footer>
  );
};

export default Footer;
