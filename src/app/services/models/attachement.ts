export class Attachement {
    bytes: number;
    date: string;
    edgeColor: string;
    id: string;
    idMember; string;
    isUpload: boolean;
    mimeType: any;
    name: string;
    pos: number;
    previews: AttachementPreview[];
    url: string;
}

export class AttachementPreview {
    bytes: number;
    height: number;
    scaled: boolean;
    url: string;
    width: number;
    _id: string;
}
