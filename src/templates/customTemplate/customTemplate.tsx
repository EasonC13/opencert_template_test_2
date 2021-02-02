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
  background-position: center center;
  background-size: cover;
  background-image: url('https://i.imgur.com/EjypxQN.png');
  //background-image: url('https://i.imgur.com/iOjXS2p.png');
  //background-color: #324353;
  border: 10px solid rgb(50, 67, 83);
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

const removeUnderLine = css`
  text-decoration: none;
  color: black;
`

export const CustomTemplate: FunctionComponent<TemplateProps<CustomTemplateCertificate> & { className?: string }> = ({
  document,
  className = ""
}) => {
  return (
    <div css={containerStyle} className={className} id="custom-template">
      <div>
        <h1 css={titleCss}>{document?.info?.title ??  "Default title"}</h1>
        <h3>Award to</h3>
        <h1>{document.name}</h1>
        <br></br>
        <h3>Issue Time: {document?.info?.time ??  "Default Time"}</h3>
        <h3><a css={removeUnderLine} href="https://fio.one" target="_blank" >By {document.issuers[0].name}</a></h3>
      </div>
    </div>
  );
};



