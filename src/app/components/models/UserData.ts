export interface UserData {
  personalInfo: {
    name: string;
    email: string;
    password: string;
  };
  goalInfo: {
    goal: string;
  };
  genderInfo: {
    gender: string;
    dateOfBirth: string;
  };
  parametersInfo: {
    height: string;
    weight: string;
  };
  activityInfo: {
    activity: string;
  };
}
