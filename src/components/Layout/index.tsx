import { Header } from '../Header';
import type { LayoutProps } from './schema';

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
