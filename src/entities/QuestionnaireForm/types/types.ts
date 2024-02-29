interface IQuestionnaireForm {
  user: {
    country: string;
    city: string;
    adress: string;
    index: number;

    clothingSize: string;
    shoeSize: number;

    programm: string;
    purpose: string;
    education: string;
    workPlace: string;

    telegram: string;
    wa: string;
    habr: string;
    email: string;
    phone: string;
    
    other: string;
  };
}

export type { IQuestionnaireForm };
