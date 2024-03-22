
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

export interface MembersProps {
  entrepreneurStatus: string;
  businessName: string;
  businessSize: string;
  businessIndustry: string;
  businessYears: string;
  businessPurpose: string;
  businessEarnings: string;
  businessTarget: string;
  email: string;
  userId: string;
};
