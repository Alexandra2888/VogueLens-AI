interface SimpleAnalysisResponse {
  description: string;
  error?: string;
}

const extractFromDescription = (description: string) => {
  const labelsMatch = description.match(/I can see ([^.]+)/i);
  const objectsMatch = description.match(/main objects I detect are ([^.]+)/i);
  const colorsMatch = description.match(/dominant colors are ([^.]+)/i);

  return {
    labels: labelsMatch ? labelsMatch[1].split(', ') : [],
    objects: objectsMatch ? objectsMatch[1].split(', ') : [],
    colors: colorsMatch ? colorsMatch[1].split(', ') : [],
  };
};

const getColorPalette = (colors: string[]) => {
  if (colors.length < 2) return 'Monochromatic';

  // Function to convert RGB string to HSL
  const rgbToHsl = (rgb: string) => {
    const match = rgb.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
    if (!match) return { h: 0, s: 0, l: 0 };

    let [, r, g, b] = match.map(Number);
    r /= 255;
    g /= 255;
    b /= 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0,
      s,
      l = (max + min) / 2;

    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
      }
      h /= 6;
    }

    // @ts-ignore
    return { h: h * 360, s: s * 100, l: l * 100 };
  };

  const hslColors = colors.map(rgbToHsl);
  const hueDiffs = hslColors
    .map((c1, i) => hslColors.slice(i + 1).map((c2) => Math.abs(c1.h - c2.h)))
    .flat();

  if (hueDiffs.some((diff) => diff > 150)) return 'Complementary';
  if (hueDiffs.some((diff) => diff > 90)) return 'Triadic';
  if (hueDiffs.every((diff) => diff < 30)) return 'Analogous';
  return 'Mixed';
};

const analyzeImage = async (
  file: File,
  analysisType: string
): Promise<string> => {
  try {
    const formData = new FormData();
    formData.append('image', file);

    const response = await fetch('/api/analyze-image', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = (await response.json()) as SimpleAnalysisResponse;

    if (result.error) {
      throw new Error(result.error);
    }

    const { labels, objects, colors } = extractFromDescription(
      result.description
    );
    const allItems = [...labels, ...objects].map((item) => item.toLowerCase());

    switch (analysisType) {
      case 'style': {
        const styleCategories = {
          formal: {
            keywords: [
              'suit',
              'dress shirt',
              'blazer',
              'formal wear',
              'blouse',
              'dress pants',
            ],
            description: 'formal and professional',
          },
          casual: {
            keywords: [
              't-shirt',
              'jeans',
              'hoodie',
              'sweater',
              'casual',
              'top',
            ],
            description: 'casual and relaxed',
          },
          athletic: {
            keywords: ['sportswear', 'athletic', 'workout', 'active', 'sports'],
            description: 'athletic and sporty',
          },
          bohemian: {
            keywords: [
              'boho',
              'floral',
              'loose',
              'flowing',
              'ethnic',
              'pattern',
            ],
            description: 'bohemian and free-spirited',
          },
          elegant: {
            keywords: ['gown', 'dress', 'silk', 'satin', 'elegant'],
            description: 'elegant and sophisticated',
          },
        };

        const detectedStyles = Object.entries(styleCategories)
          .filter(([_, { keywords }]) =>
            keywords.some((keyword) =>
              allItems.some((item) => item.includes(keyword))
            )
          )
          .map(([style, { description }]) => ({ style, description }));

        if (detectedStyles.length === 0) {
          return `This piece has a versatile style that can be dressed up or down. ${result.description}`;
        }

        const styleDescriptions = detectedStyles
          .map(({ style, description }) => `${style} (${description})`)
          .join(' and ');

        return `This piece has a ${styleDescriptions} aesthetic. ${result.description}`;
      }

      case 'color': {
        if (!colors.length) {
          return 'Unable to analyze colors. Please try a different image.';
        }

        const palette = getColorPalette(colors);
        let colorAdvice = '';

        switch (palette) {
          case 'Monochromatic':
            colorAdvice =
              'This creates a sophisticated, cohesive look. Try accessorizing with contrasting colors for accent.';
            break;
          case 'Complementary':
            colorAdvice =
              'These colors create striking contrasts. Perfect for making a bold statement.';
            break;
          case 'Triadic':
            colorAdvice =
              'This balanced color scheme offers vibrant variety while maintaining harmony.';
            break;
          case 'Analogous':
            colorAdvice =
              'These harmonious colors create a serene, cohesive look.';
            break;
          case 'Mixed':
            colorAdvice =
              'This versatile palette offers multiple styling possibilities.';
            break;
        }

        return `${result.description}. This piece features a ${palette.toLowerCase()} color scheme. ${colorAdvice}`;
      }

      case 'weather': {
        const weatherIndicators = {
          summer: [
            'short sleeve',
            't-shirt',
            'tank',
            'light',
            'thin',
            'cotton',
            'linen',
          ],
          winter: [
            'long sleeve',
            'sweater',
            'coat',
            'jacket',
            'thick',
            'wool',
            'warm',
          ],
          spring: ['light jacket', 'cardigan', 'medium weight'],
          fall: ['jacket', 'long sleeve', 'medium weight'],
        };

        const seasons = Object.entries(weatherIndicators)
          .filter(([_, keywords]) =>
            keywords.some((keyword) =>
              allItems.some((item) => item.includes(keyword))
            )
          )
          .map(([season]) => season);

        if (seasons.length === 0) {
          return `This is a versatile piece that can be layered for different seasons. ${result.description}`;
        }

        const seasonText =
          seasons.length > 1
            ? `${seasons.slice(0, -1).join(', ')} and ${seasons.slice(-1)}`
            : seasons[0];

        return `This piece is most suitable for ${seasonText} wear. ${result.description}`;
      }

      case 'occasion': {
        const occasionCategories = {
          workwear: {
            keywords: [
              'business',
              'professional',
              'office',
              'formal',
              'suit',
              'blazer',
            ],
            description: 'professional settings',
          },
          casual: {
            keywords: ['casual', 't-shirt', 'jeans', 'everyday', 'relaxed'],
            description: 'casual outings',
          },
          formal: {
            keywords: ['formal', 'dress', 'gown', 'elegant', 'sophisticated'],
            description: 'formal events',
          },
          athletic: {
            keywords: ['sport', 'athletic', 'workout', 'gym', 'active'],
            description: 'athletic activities',
          },
        };

        const occasions = Object.entries(occasionCategories)
          .filter(([_, { keywords }]) =>
            keywords.some((keyword) =>
              allItems.some((item) => item.includes(keyword))
            )
          )
          .map(([_, { description }]) => description);

        if (occasions.length === 0) {
          return `This piece can be styled for various occasions depending on accessories and pairings. ${result.description}`;
        }

        return `This piece is well-suited for ${occasions.join(' or ')}. ${result.description}`;
      }

      case 'trend': {
        const trendKeywords = [
          'fashion',
          'trendy',
          'modern',
          'contemporary',
          'style',
          'chic',
        ];
        const isTrendy = trendKeywords.some((keyword) =>
          allItems.some((item) => item.includes(keyword))
        );

        if (isTrendy) {
          return `This piece features current fashion elements. ${result.description}`;
        }

        return `This is a classic piece that can be styled to match current trends. ${result.description}`;
      }

      default:
        return result.description;
    }
  } catch (error) {
    console.error('Analysis error:', error);
    return 'Failed to analyze image. Please try again.';
  }
};

export default analyzeImage;
