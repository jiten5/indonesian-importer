import { NotFoundPage } from "@/components/ui/not-found-page";
import Breadcrumb from '@/components/ui/Breadcrumb';

export default function Demo404Page() {
  return (
    <>
      <Breadcrumb items={[{ label: '404 Demo', href: '/demo-404' }]} />
      <NotFoundPage />
    </>
  );
}

