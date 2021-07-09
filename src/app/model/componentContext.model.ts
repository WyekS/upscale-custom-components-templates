export class ComponentContext {
     sellinTreeID: string;
     experienceId: string;
     editionId: string;
     language: string;
     customerSessionId: string;
     authToken: string;

    constructor(sellinTreeID: string, experienceId: string, editionId: string, language: string, customerSessionId: string, authToken: string){
        this.sellinTreeID = sellinTreeID;
        this.experienceId = experienceId;
        this.editionId = editionId;
        this.language = language;
        this.customerSessionId = customerSessionId;
        this.authToken = authToken;
    }
 }