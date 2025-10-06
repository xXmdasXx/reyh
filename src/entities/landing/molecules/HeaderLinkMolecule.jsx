import React from "react";
import HeaderTypographyLink from "../../global/atoms/HeaderTypographyLink/HeaderTypographyLink";

function HeaderLinkMolecule() {
  const links = [
    { text: "صفحه اصلی", href: "/" },
    { text: "محصولات", href: "/products" },
    { text: "هنرمندان", href: "/artists" },
    { text: "اشتراک ها", href: "/subscriptions" },
    { text: "درباره ما", href: "/aboutus" },
  ];

  return (
    <div className="h-full flex flex-row">
      {links.map((link, index) => (
        <div
          key={index}
          className="w-auto h-full flex flex-row items-center xl:mr-11 mr-4"
        >
          <HeaderTypographyLink
            text={link.text}
            href={link.href}
            className="!w-auto !px-3"
          />
        </div>
      ))}
    </div>
  );
}

export default HeaderLinkMolecule;
