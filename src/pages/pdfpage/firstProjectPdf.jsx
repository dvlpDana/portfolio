import React from "react";

import AllPagePdf from "../../components/allPagePdf";

import proposalPdf from "../../pdf/proposal/project_1_proposal.pdf";
import wireframePdf from "../../pdf/wireframe/project_1_wireframe.pdf";
import styleguidePdf from "../../pdf/styleguide/project_1_styleguide.pdf";

const FirstProjectProposal = () => {
  return(
    <div className="pdfCon">
      <AllPagePdf pdf={proposalPdf}/>
    </div>
  )
};

const FirstProjectWireframe = () => {
  return(
    <div className="pdfCon">
      <AllPagePdf pdf={wireframePdf}/>
    </div>
  )
};

const FirstProjectStyleguide = () => {
  return(
    <div className="pdfCon">
      <AllPagePdf pdf={styleguidePdf}/>
    </div>
  )
};

export {FirstProjectProposal, FirstProjectWireframe, FirstProjectStyleguide};