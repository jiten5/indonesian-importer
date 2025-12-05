'use client';

import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { useRouter } from 'next/navigation';
import HeroSection from '@/components/Homepage/HeroSection';
import ProblemsSection from '@/components/Homepage/ProblemsSection';
import StatsSection from '@/components/Homepage/StatsSection';
import ProductsSection from '@/components/Homepage/ProductsSection';
import SolutionsSection from '@/components/Homepage/SolutionsSection';
import FinalCTASection from '@/components/Homepage/FinalCTASection';

export default function HomePage() {
  const router = useRouter();

  const handleSearch = (searchType: string, searchBy: string, query: string) => {
    router.push(`/search?type=${searchType}&searchBy=${searchBy}&q=${encodeURIComponent(query)}`);
  };

  return (
    <MainLayout>
      <HeroSection onSearch={handleSearch} />
      <ProblemsSection />
      <StatsSection />
      <ProductsSection />
      <SolutionsSection />
      <FinalCTASection />
    </MainLayout>
  );
}

