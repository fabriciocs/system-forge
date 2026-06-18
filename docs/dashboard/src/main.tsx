import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { DocumentationThemeProvider } from './theme/theme-provider';
import { GlobalStateProvider, NavigationProvider, PermissionsProvider, TenantProvider } from './core/providers';
import { ErrorBoundary } from './core/error';
import './styles/global.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found.');
}

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <DocumentationThemeProvider>
        <TenantProvider>
          <PermissionsProvider>
            <NavigationProvider>
              <GlobalStateProvider>
                <App />
              </GlobalStateProvider>
            </NavigationProvider>
          </PermissionsProvider>
        </TenantProvider>
      </DocumentationThemeProvider>
    </ErrorBoundary>
  </React.StrictMode>,
);
