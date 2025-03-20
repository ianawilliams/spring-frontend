export const loginRoutes = {
  login: {
      component: "LoginForm",
      back: "",
  },
  signup: {
      component: "SignupForm",
      back: "login",
  },
  reset: {
      component: "ResetMain",
      back: "login",
  },
  resetform: {
      component: "ResetForm",
      back: "reset",
  },
  verify: {
      component: "VerifyForm",
      back: "signup",
  },
};
