export interface IPromoRequestProps {
  title: string;
  market: string;
  link: string;
  image: string;
  price: number;
}

export interface IPromoResponseProps extends IPromoRequestProps {
  id: string;
  is_active: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface IPromoUpdateRequestProps
  extends Partial<IPromoResponseProps> {}
