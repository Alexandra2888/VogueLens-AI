// Unit tests for generateChatTitle (mirrors function in chatbot-interface.tsx)

function generateChatTitle(message: string): string {
  const cleanMessage = message.replace(/^Generate image:\s*/i, '');
  return cleanMessage.length > 30
    ? `${cleanMessage.substring(0, 27)}...`
    : cleanMessage;
}

describe('generateChatTitle', () => {
  it('returns the message as-is when 30 chars or fewer', () => {
    expect(generateChatTitle('Hello')).toBe('Hello');
    expect(generateChatTitle('Exactly thirty characters here')).toBe(
      'Exactly thirty characters here'
    );
  });

  it('truncates messages longer than 30 characters', () => {
    const long = 'This is a very long message that exceeds the limit';
    const result = generateChatTitle(long);
    expect(result).toHaveLength(30);
    expect(result.endsWith('...')).toBe(true);
    expect(result).toBe('This is a very long message...');
  });

  it('strips "Generate image:" prefix (case-insensitive)', () => {
    expect(generateChatTitle('Generate image: red dress')).toBe('red dress');
    expect(generateChatTitle('GENERATE IMAGE: blue suit')).toBe('blue suit');
    expect(generateChatTitle('generate image:   trimmed')).toBe('trimmed');
  });

  it('strips prefix before applying truncation', () => {
    const msg = 'Generate image: This is a very long prompt description here';
    const result = generateChatTitle(msg);
    expect(result.startsWith('Generate image')).toBe(false);
    expect(result.length).toBeLessThanOrEqual(30);
  });

  it('handles empty string', () => {
    expect(generateChatTitle('')).toBe('');
  });

  it('does not strip partial matches', () => {
    expect(generateChatTitle('Generating images is fun')).toBe(
      'Generating images is fun'
    );
  });
});
