import React from "react";
import CheckCircle from "../atoms/CheckCircle/CheckCircle";
import TypographyAtom from "@/entities/global/atoms/Typography/TypographyAtom";

type PlanFeaturesMoleculeProps = {
  feat: string;
  mt?: string;
};

function PlanFeaturesMolecule({ feat, mt }: PlanFeaturesMoleculeProps) {
  return (
    <div className={`flex flex-row items-center ${mt || ""}`}>
      <CheckCircle />
      <TypographyAtom className="!text-[1rem] !mr-5">{feat}</TypographyAtom>
    </div>
  );
}

export default PlanFeaturesMolecule;
