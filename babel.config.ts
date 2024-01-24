// ./babel.config.ts

import type { ConfigAPI, TransformOptions } from "@babel/core";

export default function (api: ConfigAPI): TransformOptions {
  const presets: string[] = ["@babel/env"];

  return {
    presets,
  };
}
