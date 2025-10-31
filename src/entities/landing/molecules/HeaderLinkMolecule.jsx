import React from "react";
import HeaderTypographyLink from "../../global/atoms/HeaderTypographyLink/HeaderTypographyLink";

// Export links array for reuse in other components
export const headerLinks = [
  { text: "صفحه اصلی", href: "/" },
  { text: "محصولات", href: "/products" },
  { text: "هنرمندان", href: "/artists" },
  { text: "اشتراک ها", href: "/subscriptions" },
  { text: "درباره ما", href: "/aboutus" },
];

function HeaderLinkMolecule({ onLinkClick, isMobile = false }) {
  return (
    <div className={`h-full flex ${isMobile ? 'flex-col' : 'flex-row'}`}>
      {headerLinks.map((link, index) => (
        <div
          key={index}
          className={`w-auto ${isMobile ? 'w-full py-3' : 'h-full'} flex flex-row items-center ${isMobile ? 'justify-center' : 'xl:mr-11 mr-4'}`}
        >
          <HeaderTypographyLink
            text={link.text}
            href={link.href}
            className="!w-auto !px-3"
            onClick={onLinkClick}
          />
        </div>
      ))}
    </div>
  );
}

export default HeaderLinkMolecule;
