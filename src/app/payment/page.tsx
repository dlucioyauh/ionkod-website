'use client';

import { Suspense } from 'react';
import PaymentPageContent from './PaymentPageContent';
import Loading from '@/components/Loading';

export default function PaymentPage() {
  return (
    <Suspense fallback={<Loading />}>
      <PaymentPageContent />
    </Suspense>
  );
}
