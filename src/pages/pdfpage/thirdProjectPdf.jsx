import React from "react";

import AllPagePdf from "../../components/allPagePdf";

import proposalPdf from "../../pdf/proposal/project_3_proposal.pdf";
import wireframePdf from "../../pdf/wireframe/project_3_wireframe.pdf";
import styleguidePdf from "../../pdf/styleguide/project_3_styleguide.pdf";

const ThirdProjectProposal = () => {
  return (
    <div className="pdfCon">
      <AllPagePdf pdf={proposalPdf} />
    </div>
  );
};

const ThirdProjectWireframe = () => {
  return (
    <div className="pdfCon">
      <AllPagePdf pdf={wireframePdf} />
    </div>
  );
};

const ThirdProjectStyleguide = () => {
  return (
    <div className="pdfCon thirdProject">
      <AllPagePdf pdf={styleguidePdf} />
    </div>
  );
};

export { ThirdProjectProposal, ThirdProjectWireframe, ThirdProjectStyleguide };
