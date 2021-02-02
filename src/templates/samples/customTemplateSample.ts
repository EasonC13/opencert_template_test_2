import { v2 } from "@govtechsg/decentralized-renderer-react-components";

export interface CustomTemplateCertificate extends v2.OpenAttestationDocument {
  name: string;
  institute: string;
  info?: {
    title: string;
    time: string;
  };
}

export const customTemplateCertificate: CustomTemplateCertificate = {
  name: "Eason Chen",
  institute: "FiO.one",
  issuers: [
    {
      name: "FiO.one"
    }
  ],
  $template: {
    name: "custom",
    type: v2.TemplateType.EmbeddedRenderer,
    url: "http://localhost:3000"
  },
  info: {
    title: "The Best Inernship",
    time: "2020 Summer"
  }
};
