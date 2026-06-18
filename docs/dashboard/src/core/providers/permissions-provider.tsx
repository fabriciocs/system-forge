import { createContext, useContext, useMemo, useState, type PropsWithChildren } from 'react';

export type Permission = 'view' | 'create' | 'edit' | 'review' | 'admin';

interface PermissionsValue {
  permissions: Permission[];
  hasPermission: (permission: Permission) => boolean;
  setPermissions: (permissions: Permission[]) => void;
}

const PermissionsContext = createContext<PermissionsValue | null>(null);

export function PermissionsProvider({ children }: PropsWithChildren) {
  const [permissions, setPermissions] = useState<Permission[]>(['view', 'create', 'edit', 'review', 'admin']);

  const value = useMemo<PermissionsValue>(
    () => ({
      permissions,
      hasPermission: (permission) => permissions.includes(permission),
      setPermissions,
    }),
    [permissions],
  );

  return <PermissionsContext.Provider value={value}>{children}</PermissionsContext.Provider>;
}

export function usePermissions() {
  const context = useContext(PermissionsContext);
  if (!context) {
    throw new Error('usePermissions must be used within PermissionsProvider');
  }

  return context;
}
