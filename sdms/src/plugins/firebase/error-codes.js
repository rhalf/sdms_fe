const errors = [
  {
    code: "auth/claims-too-large",
    description:
      "The claims payload provided to setCustomUserClaims() exceeds the maximum allowed size of 1000 bytes.",
  },
  {
    code: "auth/email-already-exists",
    description: "The provided email is already in use by an existing user.",
  },
  {
    code: "auth/id-token-expired",
    description: "The provided Firebase ID token is expired.",
  },

  {
    code: "auth/invalid-email",
    description: "The provided value for the email user property is invalid.",
  },
  {
    code: "auth/user-not-found",
    description:
      "There is no existing user record corresponding to the provided identifier.",
  },
  {
    code: "auth/wrong-password",
    description: "You have entered wrong password.",
  },

  {
    code: "auth/too-many-requests",
    description: "The number of requests exceeds the maximum allowed.",
  },
  {
    code: "auth/id-token-revoked",
    description: "The Firebase ID token has been revoked.",
  },
  {
    code: "auth/insufficient-permission",
    description:
      "The credential used to initialize the Admin SDK has insufficient permission to access the requested Authentication resource. Refer to Set up a Firebase project for documentation on how to generate a credential with appropriate permissions and use it to authenticate the Admin SDKs.",
  },
  {
    code: "auth/invalid-argument",
    description:
      "An invalid argument was provided to an Authentication method. The error message should contain additional information.",
  },
  {
    code: "auth/invalid-claims",
    description:
      "The custom claim attributes provided to setCustomUserClaims() are invalid.",
  },
  {
    code: "auth/invalid-continue-uri",
    description: "The continue URL must be a valid URL string.",
  },
  {
    code: "auth/invalid-creation-time",
    description: "The creation time must be a valid UTC date string.",
  },
  {
    code: "auth/invalid-credential",
    description:
      "The credential used to authenticate the Admin SDKs cannot be used to perform the desired action. Certain Authentication methods such as createCustomToken() and verifyIdToken() require the SDK to be initialized with a certificate credential as opposed to a refresh token or Application Default credential. See Initialize the SDK for documentation on how to authenticate the Admin SDKs with a certificate credential.",
  },
  {
    code: "auth/invalid-disabled-field",
    description:
      "The provided value for the disabled user property is invalid. It must be a boolean.",
  },
  {
    code: "auth/invalid-display-name",
    description:
      "The provided value for the displayName user property is invalid. It must be a non-empty string.",
  },
  {
    code: "auth/invalid-dynamic-link-domain",
    description:
      "The provided dynamic link domain is not configured or authorized for the current project.",
  },
  {
    code: "auth/invalid-email-verified",
    description:
      "The provided value for the emailVerified user property is invalid. It must be a boolean.",
  },
  {
    code: "auth/invalid-hash-algorithm",
    description:
      "The hash algorithm must match one of the strings in the list of supported algorithms.",
  },
  {
    code: "auth/invalid-hash-block-size",
    description: "The hash block size must be a valid number.",
  },
  {
    code: "auth/invalid-hash-derived-key-length",
    description: "The hash derived key length must be a valid number.",
  },
  {
    code: "auth/invalid-hash-key",
    description: "The hash key must a valid byte buffer.",
  },
  {
    code: "auth/invalid-hash-memory-cost",
    description: "The hash memory cost must be a valid number.",
  },
  {
    code: "auth/invalid-hash-parallelization",
    description: "The hash parallelization must be a valid number.",
  },
  {
    code: "auth/invalid-hash-rounds",
    description: "The hash rounds must be a valid number.",
  },
  {
    code: "auth/invalid-hash-salt-separator",
    description:
      "The hashing algorithm salt separator field must be a valid byte buffer.",
  },
  {
    code: "auth/invalid-id-token",
    description: "The provided ID token is not a valid Firebase ID token.",
  },
  {
    code: "auth/invalid-last-sign-in-time",
    description: "The last sign-in time must be a valid UTC date string.",
  },
  {
    code: "auth/invalid-page-token",
    description:
      "The provided next page token in listUsers() is invalid. It must be a valid non-empty string.",
  },
  {
    code: "auth/invalid-password",
    description:
      "The provided value for the password user property is invalid. It must be a string with at least six characters.",
  },
  {
    code: "auth/invalid-password-hash",
    description: "The password hash must be a valid byte buffer.",
  },
  {
    code: "auth/invalid-password-salt",
    description: "The password salt must be a valid byte buffer.",
  },
  {
    code: "auth/invalid-phone-number",
    description:
      "The provided value for the phoneNumber is invalid. It must be a non-empty E.164 standard compliant identifier string.",
  },
  {
    code: "auth/invalid-photo-url",
    description:
      "The provided value for the photoURL user property is invalid. It must be a string URL.",
  },
  {
    code: "auth/invalid-provider-data",
    description: "The providerData must be a valid array of UserInfo objects.",
  },
  {
    code: "auth/invalid-provider-id",
    description:
      "The providerId must be a valid supported provider identifier string.",
  },
  {
    code: "auth/invalid-oauth-responsetype",
    description: "Only exactly one OAuth responseType should be set to true.",
  },
  {
    code: "auth/invalid-session-cookie-duration",
    description:
      "The session cookie duration must be a valid number in milliseconds between 5 minutes and 2 weeks.",
  },
  {
    code: "auth/invalid-uid",
    description:
      "The provided uid must be a non-empty string with at most 128 characters.",
  },
  {
    code: "auth/invalid-user-import",
    description: "The user record to import is invalid.",
  },
  {
    code: "auth/maximum-user-count-exceeded",
    description:
      "The maximum allowed number of users to import has been exceeded.",
  },
  {
    code: "auth/missing-android-pkg-name",
    description:
      "An Android Package Name must be provided if the Android App is required to be installed.",
  },
  {
    code: "auth/missing-continue-uri",
    description: "A valid continue URL must be provided in the request.",
  },
  {
    code: "auth/missing-hash-algorithm",
    description:
      "Importing users with password hashes requires that the hashing algorithm and its parameters be provided.",
  },
  {
    code: "auth/missing-ios-bundle-id",
    description: "The request is missing a Bundle ID.",
  },
  {
    code: "auth/missing-uid",
    description: "A uid identifier is required for the current operation.",
  },
  {
    code: "auth/missing-oauth-client-secret",
    description:
      "The OAuth configuration client secret is required to enable OIDC code flow.",
  },
  {
    code: "auth/operation-not-allowed",
    description:
      "The provided sign-in provider is disabled for your Firebase project. Enable it from the Sign-in Method section of the Firebase console.",
  },
  {
    code: "auth/phone-number-already-exists",
    description:
      "The provided phoneNumber is already in use by an existing user. Each user must have a unique phoneNumber.",
  },
  {
    code: "auth/project-not-found",
    description:
      "No Firebase project was found for the credential used to initialize the Admin SDKs. Refer to Set up a Firebase project for documentation on how to generate a credential for your project and use it to authenticate the Admin SDKs.",
  },
  {
    code: "auth/reserved-claims",
    description:
      "One or more custom user claims provided to setCustomUserClaims() are reserved. For example, OIDC specific claims such as (sub, iat, iss, exp, aud, auth_time, etc) should not be used as keys for custom claims.",
  },
  {
    code: "auth/session-cookie-expired",
    description: "The provided Firebase session cookie is expired.",
  },
  {
    code: "auth/session-cookie-revoked",
    description: "The Firebase session cookie has been revoked.",
  },
  {
    code: "auth/uid-already-exists",
    description:
      "The provided uid is already in use by an existing user. Each user must have a unique uid.",
  },
  {
    code: "auth/unauthorized-continue-uri",
    description:
      "The domain of the continue URL is not whitelisted. Whitelist the domain in the Firebase Console.",
  },
];

export const getDescription = async (code) => {
  const error = await errors.filter((error) => error.code === code);
  if (!error.length) return;

  return error[0].description;
};
