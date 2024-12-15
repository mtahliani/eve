import type { APIResponse } from '../types';

const API_URL = 'https://openlake.app.n8n.cloud/webhook-test/efc50eb0-e00b-4389-a286-0d9ad4ef3c76';

export async function sendMessage(message: string): Promise<APIResponse> {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    return {
      success: true,
      data: {
        response: data.output || data.response || 'No response received'
      }
    };
  } catch (error) {
    console.error('API Error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'An unknown error occurred',
    };
  }
}