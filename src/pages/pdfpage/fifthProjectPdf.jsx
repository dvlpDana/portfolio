import React from "react";

import AllPagePdf from "../../components/allPagePdf";

import proposalPdf from "../../pdf/proposal/project_5_proposal.pdf";
import wireframePdf from "../../pdf/wireframe/project_5_wireframe.pdf";
import styleguidePdf from "../../pdf/styleguide/project_5_styleguide.pdf";

const FifthProjectProposal = () => {
  return (
    <div className="pdfCon fifthProject">
      <AllPagePdf pdf={proposalPdf} />
    </div>
  );
};

const FifthProjectWireframe = () => {
  return (
    <div className="pdfCon fifthProject smaller">
      <AllPagePdf pdf={wireframePdf} />
    </div>
  );
};

const FifthProjectStyleguide = () => {
  return (
    <div className="pdfCon fifthProject">
      <AllPagePdf pdf={styleguidePdf} />
    </div>
  );
};

export { FifthProjectProposal, FifthProjectWireframe, FifthProjectStyleguide };
