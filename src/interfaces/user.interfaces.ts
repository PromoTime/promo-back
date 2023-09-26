
export interface IUserRequestProps {
  name: string;
  password: string;
}

export interface IUserResponseProps extends Omit<IUserRequestProps, "password"> {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

interface IUserUpdateRequestPropsWithoutCPF
  extends Omit<IUserRequestProps, "created_at" | "updated_at"> {}

export interface IUserUpdateRequestProps
  extends Partial<IUserUpdateRequestPropsWithoutCPF> {}
