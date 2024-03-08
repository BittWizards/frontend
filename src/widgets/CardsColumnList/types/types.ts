import type { IPromocode } from 'src/shared/api/promocodes/dtos';

type TPromoColumnListProps = {
  promoData: IPromocode[];
  children: React.ReactElement[];
};

export type { TPromoColumnListProps };
