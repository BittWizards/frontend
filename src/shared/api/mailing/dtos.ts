interface TMailPost {
  title: string;
  text: string;
  sent?: Date;
  by_email?: boolean;
  to_telegram?: boolean;
  is_sent?: boolean;
  ambassadors: [
    {
      id: number;
    },
  ];
}

interface TMail extends TMailPost {
  id: number;
  sent: Date;
  by_email: boolean;
  to_telegram: boolean;
  is_sent: boolean;
  ambassadors: [
    {
      id: number;
      tg_acc: string;
    },
  ];
}

export type { TMail, TMailPost };
