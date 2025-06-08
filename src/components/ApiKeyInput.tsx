
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, EyeOff, Key } from "lucide-react";

interface ApiKeyInputProps {
  onApiKeySet: (apiKey: string) => void;
  existingKey?: string;
}

export const ApiKeyInput = ({ onApiKeySet, existingKey }: ApiKeyInputProps) => {
  const [apiKey, setApiKey] = useState(existingKey || "");
  const [showKey, setShowKey] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (apiKey.trim()) {
      localStorage.setItem('openai-api-key', apiKey.trim());
      onApiKeySet(apiKey.trim());
    }
  };

  return (
    <Card className="mb-6 border-amber-200 bg-amber-50/50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-amber-800">
          <Key className="w-5 h-5" />
          OpenAI API Key Required
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <Input
              type={showKey ? "text" : "password"}
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="sk-proj-..."
              className="pr-10"
              required
            />
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="absolute right-0 top-0 h-full px-3"
              onClick={() => setShowKey(!showKey)}
            >
              {showKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </Button>
          </div>
          <Button type="submit" className="w-full">
            Save API Key
          </Button>
        </form>
        <p className="text-xs text-amber-700 mt-2">
          Your API key is stored locally and never sent to our servers. Get your key from{" "}
          <a href="https://platform.openai.com/api-keys" target="_blank" rel="noopener noreferrer" className="underline">
            OpenAI Platform
          </a>
        </p>
      </CardContent>
    </Card>
  );
};
