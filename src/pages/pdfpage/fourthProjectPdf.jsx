import React from "react";

import AllPagePdf from "../../components/allPagePdf";

import proposalPdf from "../../pdf/proposal/project_4_proposal.pdf";
import wireframePdf from "../../pdf/wireframe/project_4_wireframe.pdf";
import styleguidePdf from "../../pdf/styleguide/project_4_styleguide.pdf";



export const FourthProjectProposal = () => {
  return(
    <div className="pdfCon fourthProject">
      <AllPagePdf pdf={proposalPdf}/>
    </div>
  )
};

export const FourthProjectWireframe = () => {
  return(
    <div className="pdfCon">
      <AllPagePdf pdf={wireframePdf}/>
    </div>
  )
};

export const FourthProjectStyleguide = () => {
  return(
    <div className="pdfCon">
      <AllPagePdf pdf={styleguidePdf}/>
    </div>
  )
};
