import { createContext, useContext, useMemo, useState, type PropsWithChildren } from 'react';

export interface TenantContextValue {
  tenant: string;
  company: string;
  branch: string;
  setTenant: (tenant: string) => void;
  setCompany: (company: string) => void;
  setBranch: (branch: string) => void;
}

const TenantContext = createContext<TenantContextValue | null>(null);

export function TenantProvider({ children }: PropsWithChildren) {
  const [tenant, setTenant] = useState('Tenant Global');
  const [company, setCompany] = useState('System Forge Ltda');
  const [branch, setBranch] = useState('Operações SP');

  const value = useMemo(
    () => ({ tenant, company, branch, setTenant, setCompany, setBranch }),
    [tenant, company, branch],
  );

  return <TenantContext.Provider value={value}>{children}</TenantContext.Provider>;
}

export function useTenant() {
  const context = useContext(TenantContext);
  if (!context) {
    throw new Error('useTenant must be used within TenantProvider');
  }

  return context;
}
