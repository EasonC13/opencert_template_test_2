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


const containerStyle = css`
  background-image: url('https://i.imgur.com/EjypxQN.png');
  //background-image: url('https://i.imgur.com/iOjXS2p.png');
  //background-color: #324353;
  color: black;
  padding: 15px;
  margin: auto;
  width: 80%;
  text-align: center;
  height: 295;
  width: 195;
`;

const titleCss = css`
  color: rgb(175, 149, 58)
`

export const CustomTemplate: FunctionComponent<TemplateProps<CustomTemplateCertificate> & { className?: string }> = ({
  document,
  className = ""
}) => {
  return (
    <div css={containerStyle} className={className} id="custom-template">
      <div>
        <h1>{document?.foo?.title ??  "Default title"}</h1>
        <h3>Award to</h3>
        <h2>{document.name}</h2>
        <br></br>
        <h3>Time: {document?.foo?.time ??  "Default Time"}</h3>
        <h3>By {document.issuers[0].name}</h3>
      </div>
    </div>
  );
};
