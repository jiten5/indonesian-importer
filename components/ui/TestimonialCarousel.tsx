'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  image?: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  autoPlay?: boolean;
  interval?: number;
  className?: string;
}

export function TestimonialCarousel({
  testimonials,
  autoPlay = true,
  interval = 5000,
  className,
}: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay || testimonials.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  if (testimonials.length === 0) return null;

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className={cn('relative', className)}>
      <div className="bg-white dark:bg-neutral-800 rounded-lg p-8 shadow-lg">
        {/* Testimonial Content */}
        <div className="mb-6">
          <p className="text-lg text-neutral-700 dark:text-neutral-300 italic">
            "{currentTestimonial.content}"
          </p>
        </div>

        {/* Author Info */}
        <div className="flex items-center gap-4">
          {currentTestimonial.image && (
            <div className="w-12 h-12 rounded-full bg-neutral-200 dark:bg-neutral-700 overflow-hidden">
              <img
                src={currentTestimonial.image}
                alt={currentTestimonial.name}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <div>
            <div className="font-semibold text-neutral-900 dark:text-neutral-50">
              {currentTestimonial.name}
            </div>
            <div className="text-sm text-neutral-600 dark:text-neutral-400">
              {currentTestimonial.role} at {currentTestimonial.company}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      {testimonials.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className={cn(
              'absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2',
              'w-10 h-10 rounded-full bg-white dark:bg-neutral-800',
              'border border-neutral-200 dark:border-neutral-700',
              'flex items-center justify-center',
              'hover:bg-neutral-50 dark:hover:bg-neutral-700',
              'transition-colors shadow-lg'
            )}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-neutral-700 dark:text-neutral-300" />
          </button>
          <button
            onClick={goToNext}
            className={cn(
              'absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2',
              'w-10 h-10 rounded-full bg-white dark:bg-neutral-800',
              'border border-neutral-200 dark:border-neutral-700',
              'flex items-center justify-center',
              'hover:bg-neutral-50 dark:hover:bg-neutral-700',
              'transition-colors shadow-lg'
            )}
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-neutral-700 dark:text-neutral-300" />
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {testimonials.length > 1 && (
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                'w-2 h-2 rounded-full transition-all duration-300',
                index === currentIndex
                  ? 'w-6 bg-primary-600 dark:bg-primary-400'
                  : 'bg-neutral-300 dark:bg-neutral-600 hover:bg-neutral-400 dark:hover:bg-neutral-500'
              )}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

