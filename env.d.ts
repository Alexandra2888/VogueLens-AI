declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_OPENAI_API_KEY: string;
    }
  }
}

export {};
