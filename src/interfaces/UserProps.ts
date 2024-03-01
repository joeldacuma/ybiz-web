
export interface CMSUserProps {
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  password: string;
};

export interface UserProps {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  isNotified: boolean;
  confirmPassword: string;
};