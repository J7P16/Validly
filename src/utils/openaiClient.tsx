
interface OpenAIResponse {
  marketDemand: {
    score: number;
    summary: string;
    details: string;
  };
  competitors: Array<{
    name: string;
    description: string;
    popularity: string;
    locations: string;
    pricing: string;
  }>;
  targetAudience: string[];
  revenueModels: string[];
  mvpFeatures: Array<{
    feature: string;
    priority: string;
    effort: string;
  }>;
}

export const generateValidationResults = async (idea: string, apiKey: string): Promise<OpenAIResponse> => {
  const prompt = `
You are a business validation expert. Analyze the following startup idea and provide a comprehensive validation report.

Startup Idea: "${idea}"

Please respond with a valid JSON object containing the following structure:

{
  "marketDemand": {
    "score": [number between 1-10],
    "summary": "[2-3 sentence market demand summary]",
    "details": "[detailed market analysis paragraph]"
  },
  "competitors": [
    {
      "name": "[competitor name]",
      "description": "[brief description]",
      "popularity": "[High/Medium/Low]",
      "locations": "[geographic presence]",
      "pricing": "[pricing model/range]"
    }
  ],
  "targetAudience": [
    "[target audience segment 1]",
    "[target audience segment 2]",
    "[target audience segment 3]"
  ],
  "revenueModels": [
    "[revenue model 1]",
    "[revenue model 2]",
    "[revenue model 3]"
  ],
  "mvpFeatures": [
    {
      "feature": "[feature name]",
      "priority": "[High/Medium/Low]",
      "effort": "[Low/Medium/High]"
    }
  ]
}

Ensure the response is valid JSON only, no additional text.
`;

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: 'You are a business validation expert. Always respond with valid JSON only.'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      temperature: 0.7,
      max_tokens: 2000
    }),
  });

  if (!response.ok) {
    throw new Error(`OpenAI API error: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();
  const content = data.choices[0].message.content;
  
  try {
    return JSON.parse(content);
  } catch (error) {
    console.error('Failed to parse OpenAI response:', content);
    throw new Error('Invalid JSON response from OpenAI');
  }
};
