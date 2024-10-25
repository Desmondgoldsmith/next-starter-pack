import React from "react";
import { Text } from "../atoms/Text";
import { ShiningSun } from "../atoms/ShiningSun";

export const WelcomeMessage = () => (
  <div className="flex flex-col items-center gap-8">
    <ShiningSun />
    <Text className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent animate-bounce">
      Let&apos;s Build!
    </Text>
  </div>
);
