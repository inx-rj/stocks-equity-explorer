import theme from '@/theme';
import { FC } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '@/store';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { LSColorSchemeManager } from '@/theme/manager/LSColorSchemeManager.ts';
import Router from '@/routes/Router.tsx';

export const appMode: 'light' | 'dark' | 'auto' = 'auto';

const LSSchemeManager = LSColorSchemeManager({
  key: 'color-scheme'
});

const App: FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <ColorSchemeScript defaultColorScheme={appMode} />
        <MantineProvider
          theme={theme}
          defaultColorScheme={appMode}
          colorSchemeManager={LSSchemeManager}
          withCssVariables
        >
          <Router />
        </MantineProvider>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
