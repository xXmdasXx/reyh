import React from "react";
import CheckCircle from "../atoms/CheckCircle/CheckCircle";
import TypographyAtom from "@/entities/global/atoms/Typography/TypographyAtom";

type PlanFeaturesMoleculeProps = {
  feat: string;
  mt?: string;
  className?: string;
};

function PlanFeaturesMolecule({ feat, mt, className }: PlanFeaturesMoleculeProps) {
  return (
    <div className={`flex flex-row items-center ${mt || ""}`}>
      <CheckCircle />
      <TypographyAtom className={`!text-[1.1rem] !mr-5 
        lg:!text-[1rem] lg:!mr-5
        md:!text-[0.8rem] md:!mr-2 ${className}`} >{feat}</TypographyAtom>
    </div>
  );
}

export default PlanFeaturesMolecule;
