export const clerkTheme = {
  appearance: {
    elements: {
      formButtonPrimary:
        'bg-secondary hover:bg-secondary-hover text-white rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200 disabled:opacity-50',

      footerActionLink:
        'text-navy hover:text-secondary dark:text-highlight dark:hover:text-secondary transition-colors duration-200',

      cardClerk:
        'border-border rounded-lg border bg-card shadow-sm dark:bg-card',

      headerTitle:
        'text-text-primary-light dark:text-text-primary-dark text-2xl font-semibold',

      headerSubtitle: 'text-text-muted-light dark:text-text-muted-dark',

      socialButtonsBlockButton:
        'border-border hover:bg-accent hover:bg-accent-hover transition-colors duration-200',

      socialButtonsBlockButtonText:
        'text-text-primary-light dark:text-text-primary-dark font-medium',

      formFieldLabel: 'text-text-primary-light dark:text-text-primary-dark',

      formFieldInput:
        'border-border bg-background dark:bg-background rounded-lg px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-highlight',

      identityPreviewText:
        'text-text-primary-light dark:text-text-primary-dark',

      identityPreviewEditButton:
        'text-navy hover:text-secondary dark:text-highlight dark:hover:text-secondary',
    },
    variables: {
      colorPrimary: 'hsl(var(--secondary))',
      colorText: 'hsl(var(--text-primary))',
      colorTextSecondary: 'hsl(var(--text-muted))',
      colorBackground: 'hsl(var(--background))',
      colorInputBackground: 'hsl(var(--background))',
      colorInputText: 'hsl(var(--text-primary))',
      colorInputBorder: 'hsl(var(--border))',
      borderRadius: 'var(--radius)',
    },
  },
};
