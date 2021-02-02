import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { css } from "@emotion/core";
import { CustomTemplateCertificate } from "../samples";

const style = css`
  pre {
    background-color: lightgray;
    overflow-wrap: anywhere;
    white-space: break-spaces;
  }
`;

export const CustomTemplate: FunctionComponent<TemplateProps<CustomTemplateCertificate> & { className?: string }> = ({
  document,
  className = ""
}) => {
  return (
    <div css={style} className={className} id="custom-template">
      <div>
        <h1>{document?.foo?.title ?? "Default title"}</h1>
        <h3>Award to</h3>
        <h2>{document.name}</h2>
        <br></br>
        <h3>By {document.issuers[0].name}</h3>
      </div>
    </div>
  );
};
