import { AppProvider } from '@/layouts';

export function rootContainer(container: any) {
  return <AppProvider>{container}</AppProvider>;
}
