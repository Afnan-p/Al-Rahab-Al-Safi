import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';

export interface SelectOption {
  value: string;
  label: string;
  sublabel?: string;
  badge?: string;
  icon?: React.ReactNode;
}

interface CustomSelectProps {
  id?: string;
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
  placeholder?: string;
  icon?: React.ReactNode;
  className?: string;
  ariaLabel?: string;
}

export const CustomSelect: React.FC<CustomSelectProps> = ({
  id,
  value,
  onChange,
  options,
  placeholder = 'Select option',
  icon,
  className = '',
  ariaLabel,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  const handleSelect = (optValue: string) => {
    onChange(optValue);
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Trigger Button */}
      <button
        id={id}
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={ariaLabel || placeholder}
        className={`w-full px-4 py-3 rounded-xl border text-sm transition-all duration-200 outline-none flex items-center justify-between cursor-pointer ${
          isOpen
            ? 'border-brand-gold bg-white ring-2 ring-brand-gold/20 shadow-sm'
            : 'border-brand-border bg-brand-cream/30 hover:border-brand-gold/60 hover:bg-white text-brand-dark'
        }`}
      >
        <div className="flex items-center gap-2.5 min-w-0 pr-2 rtl:pr-0 rtl:pl-2">
          {icon && (
            <span className="text-brand-gold shrink-0 flex items-center">
              {icon}
            </span>
          )}
          <span className="truncate font-medium text-brand-dark">
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          {selectedOption?.badge && (
            <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-brand-gold/10 text-brand-gold shrink-0">
              {selectedOption.badge}
            </span>
          )}
        </div>

        <ChevronDown
          className={`w-4 h-4 text-brand-muted shrink-0 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-brand-gold' : ''
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div 
          role="listbox" 
          tabIndex={-1}
          className="absolute left-0 right-0 top-full mt-2 z-40 bg-white/98 backdrop-blur-md rounded-2xl border border-brand-border/90 shadow-elevated p-1.5 max-h-64 overflow-y-auto animate-in fade-in-50 zoom-in-95 duration-150 focus:outline-none"
        >
          {options.map((option) => {
            const isSelected = option.value === value;
            return (
              <button
                key={option.value}
                type="button"
                role="option"
                aria-selected={isSelected}
                onClick={() => handleSelect(option.value)}
                className={`w-full px-3.5 py-2.5 rounded-xl text-left rtl:text-right flex items-center justify-between gap-3 text-sm transition-colors cursor-pointer ${
                  isSelected
                    ? 'bg-brand-gold-light/60 text-brand-dark font-semibold border border-brand-gold/30'
                    : 'text-brand-dark/85 hover:bg-brand-cream hover:text-brand-dark'
                }`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  {option.icon && (
                    <span className={`shrink-0 ${isSelected ? 'text-brand-gold' : 'text-brand-muted'}`}>
                      {option.icon}
                    </span>
                  )}
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="truncate">{option.label}</span>
                      {option.badge && (
                        <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-brand-sand/60 text-brand-forest shrink-0">
                          {option.badge}
                        </span>
                      )}
                    </div>
                    {option.sublabel && (
                      <p className="text-xs text-brand-muted font-normal truncate mt-0.5">
                        {option.sublabel}
                      </p>
                    )}
                  </div>
                </div>

                {isSelected && (
                  <Check className="w-4 h-4 text-brand-gold shrink-0" />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
