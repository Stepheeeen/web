'use client';
import { useEffect, useRef } from 'react';

const PhoneInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const loadIntlTelInput = async () => {
      if (!inputRef.current) return;

      // Load script
      const script = document.createElement('script');
      script.src =
        'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/intlTelInput.min.js';
      script.async = true;

      script.onload = () => {
        const intlTelInput = (window as any).intlTelInput;

        const iti = intlTelInput(inputRef.current, {
          initialCountry: 'auto',
          geoIpLookup: (callback: (countryCode: string) => void) => {
            fetch('https://ipinfo.io?token=YOUR_TOKEN')
              .then((res) => res.json())
              .then((data) => callback(data.country || 'us'))
              .catch(() => callback('us'));
          },
          separateDialCode: true,
          utilsScript:
            'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.js',
        });

        // Enforce digit-only input
        inputRef.current?.addEventListener('input', () => {
          inputRef.current!.value = inputRef.current!.value.replace(/\D/g, '');
        });
      };

      document.body.appendChild(script);
    };

    

    loadIntlTelInput();
  }, []);

  return (
    <div className="w-full max-w-sm">
      <input
        ref={inputRef}
        type="tel"
        className="w-full py-2 px-4 pl-[80px] rounded-full border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder:text-gray-400"
        placeholder="Phone number"
      />
    </div>
  );
}

export default PhoneInput;