export interface Action {
    id:              string;
    idMemberCreator: string;
    data:            Data;
    type:            string;
    date:            string;
    memberCreator:   Member;
    member?:         Member;
  }

  export interface Data {
    list?:          List;
    board:          Board;
    card?:          Card;
    textData?:      TextData;
    text?:          string;
    old?:           Old;
    idMemberAdded?: string;
    memberType?:    string;
  }

  export interface Board {
    shortLink: string;
    name:      string;
    id:        string;
  }

  export interface Card {
    shortLink: string;
    idShort:   number;
    name:      string;
    id:        string;
    desc?:     string;
  }

  export interface List {
    name: string;
    id:   string;
  }

  export interface Old {
    desc: string;
  }

  export interface TextData {
    emoji: Emoji;
  }

  export interface Emoji {
    morty: string;
  }

  export interface Member {
    id:         string;
    avatarHash: string;
    fullName:   string;
    initials:   string;
    username:   string;
  }
