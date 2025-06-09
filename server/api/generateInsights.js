import { Configuration, OpenAIApi } from 'openai';
import dotenv from 'dotenv';
dotenv.config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { idea } = req.body;
  if (!idea) {
    return res.status(400).json({ message: 'Startup idea is required' });
  }

  try {
    const chatCompletion = await openai.createChatCompletion({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: 'You are an expert startup analyst. Analyze startup ideas and provide detailed validation insights.'
        },
        {
          role: 'user',
          content: `My startup idea is: ${idea}

Please analyze and return a structured JSON with the following keys:
- marketDemand: { score: number, summary: string, details: string }
- competitors: [{ name: string, description: string, popularity: 'High'|'Medium'|'Low', locations: string, pricing: string }]
- targetAudience: string[]
- revenueModels: string[]
- mvpFeatures: [{ feature: string, priority: 'High'|'Medium'|'Low', effort: 'High'|'Medium'|'Low' }]
Respond in strict JSON format.`
        }
      ],
      temperature: 0.7
    });

    const rawContent = chatCompletion.data.choices[0].message.content;
    const result = JSON.parse(rawContent);

    res.status(200).json(result);
  } catch (error) {
    console.error('Error generating insights:', error);
    res.status(500).json({ message: 'Failed to generate insights', error: error.message });
  }
}
