'use client';

import { useEffect } from 'react';
import { Crisp } from 'crisp-sdk-web';

const CRISP_WEBSITE_ID = process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID;

const CrispChat = () => {
  useEffect(() => {
    const initCrisp = () => {
      if (!CRISP_WEBSITE_ID || typeof window === 'undefined' || window.$crisp) {
        return;
      }

      window.$crisp = [];
      window.CRISP_WEBSITE_ID = CRISP_WEBSITE_ID;

      try {
        Crisp.configure(CRISP_WEBSITE_ID);
      } catch {}
    };

    initCrisp();
  }, []);

  return null;
};

export default CrispChat;
