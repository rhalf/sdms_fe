import { cloneDeep } from "lodash";

export const UserGroups = Object.freeze({
  SUPER: "SUPER",
  ADMIN: "ADMIN",
  NONE: "NONE",
});

export const Statuses = Object.freeze({
  ENABLED: "ENABLED",
  DISABLED: "DISABLED",
  SUSPENDED: "SUSPENDED",
});

export const Address = Object.freeze({
  country: null,
  state: null,
  region: null,
  province: null,
  city: null,
  barangay: null,
  division: null,
  exact: null,
});

export const Name = Object.freeze({
  title: null,
  first: null,
  middle: null,
  last: null,
  suffix: null,
});

export const Profile = Object.freeze({
  name: cloneDeep(Name),
  address: cloneDeep(Address),
  gender: null,
  birthDate: null,
  photoUrl: null,
  phoneNumber: null,
  headline: null,
});

//Default User
export const User = Object.freeze({
  id: null,
  email: null,
  emailVerified: null,
  mobileNumber: null,

  roles: [UserGroups.NONE],
  status: Statuses.ENABLED,
  profile: cloneDeep(Profile),
});
