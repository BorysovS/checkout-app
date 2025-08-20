'use client';

import { useState, FormEvent } from 'react';

type PromoFormProps = {
  onApply: (code: string) => void;
}

export  const PromoForm = ({ onApply }: PromoFormProps) => {
  const [code, setCode] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onApply(code);
    setCode('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={code}
        onChange={(e) => setCode(e.target.value.toUpperCase())}
        placeholder="Enter promo code"
        className="border p-2 w-full mb-2"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full focus:bg-blue-950 hover:bg-blue-700 transition-all duration-300 cursor-pointer">
        Apply
      </button>
    </form>
  );
}