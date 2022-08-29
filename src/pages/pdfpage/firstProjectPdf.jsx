import React from "react";

import AllPagePdf from "../../components/allPagePdf";

import proposalPdf from "../../pdf/proposal/project_1_proposal.pdf";
import wireframePdf from "../../pdf/wireframe/project_1_wireframe.pdf";
import styleguidePdf from "../../pdf/styleguide/project_1_styleguide.pdf";

export const FirstProjectProposal = () => {
  return(
    <div className="pdfCon">
      <AllPagePdf pdf={proposalPdf}/>
    </div>
  )

  // `${process.env.PUBLIC_URL}/pdf/proposal/project_1_proposal.pdf`
};

export const FirstProjectWireframe = () => {
  return(
    <div className="pdfCon">
      <AllPagePdf pdf={`${process.env.PUBLIC_URL}/pdf/wireframe/project_1_wireframe.pdf`}/>
    </div>
  )
};

export const FirstProjectStyleguide = () => {
  return(
    <div className="pdfCon">
      {/* <AllPagePdf pdf={styleguidePdf}/> */}
      <iframe className="pdfViewer" src={`${process.env.PUBLIC_URL}/pdf/styleguide/project_1_styleguide.pdf`}></iframe>
    </div>
  )
};
