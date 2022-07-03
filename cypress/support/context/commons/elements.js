export const COMMONELEMENTS = { 

  login: '#login-dblue',
  mainMenu: '#main-menu',
  email: '#email',
  pass: '#password',
  submit: '[data-testid="regular-login-submit"]',
  validateLogin: '[class="alert alert-message"]',
};

export const LOGOUTELEMENTS  =  {

  logout: '[data-testid="dropdown-link-sign_out"]',
  logoutValidation: '[class="alert alert-success"]'
};

export const SIGNUPELEMENTS = {

  hrefSignup: '[href="/signup"]',
  validateLink: '[data-testid="regular-signup-submit"]',
  signupValidation: '.toast-body'
};

export const SETTINGSELEMENTS = {

  settings: '[data-testid="dropdown-link-settings"]',
  avatar: '#user_avatar',
  uploadFile: '[data-testid="onboarding-submit-about-you-form"]',
  validateAvatarUpload: '[class="flash alert alert-success"]'
};

export const INVALIDINPUTELEMENTS = {

  errorAlert: '.alert-danger',
  error: '[class="alert alert-danger"]',
};