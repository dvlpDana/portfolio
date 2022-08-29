import React from "react";

import AllPagePdf from "../../components/allPagePdf";

import proposalPdf from "../../pdf/proposal/project_2_proposal.pdf";
import wireframePdf from "../../pdf/wireframe/project_2_wireframe.pdf";
import styleguidePdf from "../../pdf/styleguide/project_2_styleguide.pdf";

const SecondProjectProposal = () => {
  return (
    <div className="pdfCon">
      <AllPagePdf pdf={proposalPdf} />
    </div>
  );
};

const SecondProjectWireframe = () => {
  return (
    <div className="pdfCon">
      <AllPagePdf pdf={wireframePdf} />
    </div>
  );
};

const SecondProjectStyleguide = () => {
  return (
    <div className="pdfCon">
      <AllPagePdf pdf={styleguidePdf} />
    </div>
  );
};

export {
  SecondProjectProposal,
  SecondProjectWireframe,
  SecondProjectStyleguide
};
