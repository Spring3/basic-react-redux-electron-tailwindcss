import en from '../locale/en.json';
import fr from '../locale/fr.json';

const defaultLocale = 'en';

const supportedLocales = {
  en, fr
}

const initialState = {
  locale: defaultLocale,
  locales: Object.keys(supportedLocales),
  messages: en
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_LOCALE': {
      const locale = (action.locale).toLowerCase();
      const nextState = {
        locale,
        messages: supportedLocales[locale]
      };
      return {
        ...state,
        ...nextState
      };
    }
    default: {
      return state;
    }
  }
}
