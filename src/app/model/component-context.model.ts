export class ComponentContextData {
  sellingTreeId: string;
  experienceId: string;
  editionId: string;
  language: string;
  customerSessionId: string;
  authToken: string;

  constructor(
    sellingTreeId: string,
    experienceId: string,
    editionId: string,
    language: string,
    customerSessionId: string,
    authToken: string
  ) {
    this.sellingTreeId = sellingTreeId;
    this.experienceId = experienceId;
    this.editionId = editionId;
    this.language = language;
    this.customerSessionId = customerSessionId;
    this.authToken = authToken;
  }
}
