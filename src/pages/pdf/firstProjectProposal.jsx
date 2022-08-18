import React from "react";

import AllPagePdf from "../../components/allPagePdf";

import proposalPdf from "../../pdf/proposal/project_1_proposal.pdf";

export default function FirstProjectProposal() {
  return(
    <>
      <AllPagePdf pdf={proposalPdf}/>
    </>
  )
};
