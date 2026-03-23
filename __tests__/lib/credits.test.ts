// Unit tests for early-access credit logic (mirrors /api/user/credits logic)

const EARLY_ACCESS_LIMIT = 100;

function computeCreditsForNewUser(existingEarlyUsers: number): {
  credits: number;
  earlyAccess: boolean;
} {
  const isEarly = existingEarlyUsers < EARLY_ACCESS_LIMIT;
  return { credits: isEarly ? 100 : 0, earlyAccess: isEarly };
}

describe('early-access credit allocation', () => {
  it('first user gets 100 credits and early access', () => {
    const result = computeCreditsForNewUser(0);
    expect(result.credits).toBe(100);
    expect(result.earlyAccess).toBe(true);
  });

  it('user 99 (0-indexed) gets early access', () => {
    const result = computeCreditsForNewUser(99);
    expect(result.credits).toBe(100);
    expect(result.earlyAccess).toBe(true);
  });

  it('user 100 (101st total) gets no credits and no early access', () => {
    const result = computeCreditsForNewUser(100);
    expect(result.credits).toBe(0);
    expect(result.earlyAccess).toBe(false);
  });

  it('user 200 gets no credits and no early access', () => {
    const result = computeCreditsForNewUser(200);
    expect(result.credits).toBe(0);
    expect(result.earlyAccess).toBe(false);
  });
});

// Credit deduction logic
function deductCredits(currentCredits: number, cost: number): number | null {
  if (currentCredits < cost) return null; // insufficient
  return currentCredits - cost;
}

describe('credit deduction', () => {
  it('deducts 1 credit for a text message', () => {
    expect(deductCredits(50, 1)).toBe(49);
  });

  it('deducts 5 credits for image generation', () => {
    expect(deductCredits(50, 5)).toBe(45);
  });

  it('deducts 5 credits for image upload/analysis', () => {
    expect(deductCredits(5, 5)).toBe(0);
  });

  it('returns null when credits are insufficient', () => {
    expect(deductCredits(4, 5)).toBeNull();
    expect(deductCredits(0, 1)).toBeNull();
  });

  it('allows deduction when credits exactly match cost', () => {
    expect(deductCredits(5, 5)).toBe(0);
    expect(deductCredits(1, 1)).toBe(0);
  });
});
