import { combineReducers } from '@reduxjs/toolkit';
import { memberApi } from '../apis/member';
import themeReducer from '@/store/slices/themeSlice';
import testReducer from '@/store/slices/testSlice';
import navbarReducer from '@/store/slices/navbarSlice';
import userReducer from '@/store/slices/userSlice';
import toastReducer from '@/store/slices/toastSlice';
import guideReducer from '@/store/slices/guideSlice';
import keywordReducer from '@/store/slices/keywordSlice';
import { keywordApi } from '@/apis/keyword';
import { analyzeApi } from '@/apis/analyze';

const rootReducer = combineReducers({
  bestHotKeyword: keywordReducer,
  isDark: themeReducer,
  test: testReducer,
  isNavbar: navbarReducer,
  user: userReducer,
  toast: toastReducer,
  guide: guideReducer,
  [keywordApi.reducerPath]: keywordApi.reducer,
  [analyzeApi.reducerPath]: analyzeApi.reducer,
  [memberApi.reducerPath]: memberApi.reducer,
});

export default rootReducer;
