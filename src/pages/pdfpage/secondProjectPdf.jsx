import React from "react";

import AllPagePdf from "../../components/allPagePdf";

import proposalPdf from "../../pdf/proposal/project_2_proposal.pdf";
import wireframePdf from "../../pdf/wireframe/project_2_wireframe.pdf";
import styleguidePdf from "../../pdf/styleguide/project_2_styleguide.pdf";



export const SecondProjectProposal = () => {
  return(
    <div className="pdfCon">
      <AllPagePdf pdf={proposalPdf}/>
    </div>
  )
};

export const SecondProjectWireframe = () => {
  return(
    <div className="pdfCon">
      <AllPagePdf pdf={wireframePdf}/>
    </div>
  )
};

export const SecondProjectStyleguide = () => {
  return(
    <div className="pdfCon">
      <AllPagePdf pdf={styleguidePdf}/>
    </div>
  )
};
