export const COMMONELEMENTS = { 

  login: '#login-dblue',
  mainMenu: '#main-menu',
  email: '#email',
  pass: '#password',
  submit: '[data-testid="regular-login-submit"]'
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

  settings: '[class="dropdown-item"]',
  avatar: '#user_avatar'
};

export const INVALIDINPUTELEMENTS = {

  errorAlert: '.alert-danger',
  error: '[class="alert alert-danger"]',
  errorNonUser: '[class="alert alert-danger"]'

};