// Limits and costs adopted from models.dev
// MIT License
// Copyright (c) 2025 models.dev

import type { Component } from 'vue';
import LogoClaude from '@/ai/components/logos/claude.vue';
import LogoOpenAI from '@/ai/components/logos/openai.vue';

export interface ModelDefinition {
	provider: string;
	model: string;
	name: string;
	icon: Component;
	limit: {
		context: number;
		output: number;
	};
	cost: {
		input: number;
		output: number;
	};
}

export const AI_MODELS: ModelDefinition[] = [
	{
		provider: 'openai',
		model: 'gpt-5-nano',
		name: 'GPT-5 Nano',
		icon: LogoOpenAI,
		limit: {
			context: 400_000,
			output: 128_000,
		},
		cost: {
			input: 0.05,
			output: 0.4,
		},
	},
	{
		provider: 'openai',
		model: 'gpt-5-mini',
		name: 'GPT-5 Mini',
		icon: LogoOpenAI,
		limit: {
			context: 400_000,
			output: 128_000,
		},
		cost: {
			input: 0.25,
			output: 2,
		},
	},
	{
		provider: 'openai',
		model: 'gpt-5',
		name: 'GPT-5',
		icon: LogoOpenAI,
		limit: {
			context: 400_000,
			output: 128_000,
		},
		cost: {
			input: 1.25,
			output: 10.0,
		},
	},
	{
		provider: 'anthropic',
		model: 'claude-haiku-4-5',
		name: 'Claude Haiku 4.5',
		icon: LogoClaude,
		limit: {
			context: 200_000,
			output: 64_000,
		},
		cost: {
			input: 1.0,
			output: 5.0,
		},
	},
	{
		provider: 'anthropic',
		model: 'claude-sonnet-4-5',
		name: 'Claude Sonnet 4.5',
		icon: LogoClaude,
		limit: {
			context: 200_000,
			output: 64_000,
		},
		cost: {
			input: 3.0,
			output: 15.0,
		},
	},
	{
		provider: 'openai',
		model: 'claude-sonnet-4-5',
		name: 'OpenAI GPT OSS',
		icon: LogoOpenAI,
		limit: {
			context: 65_000,
			output: 32_000,
		},
		cost: {
			input: 0.35,
			output: 0.75,
		},
	},
	{
		provider: 'openai',
		model: 'llama3.1-8b',
		name: 'Llama 3.1 8B',
		icon: LogoOpenAI,
		limit: {
			context: 8_000,
			output: 8_000,
		},
		cost: {
			input: 0.1,
			output: 0.1,
		},
	},
	{
		provider: 'openai',
		model: 'llama-3.3-70b',
		name: 'Llama 3.3 70B',
		icon: LogoOpenAI,
		limit: {
			context: 65_000,
			output: 8_000,
		},
		cost: {
			input: 0.85,
			output: 1.2,
		},
	},
	{
		provider: 'openai',
		model: 'qwen-3-32b',
		name: 'Qwen 3 32B',
		icon: LogoOpenAI,
		limit: {
			context: 65_000,
			output: 8_000,
		},
		cost: {
			input: 0.4,
			output: 0.8,
		},
	},
] as const;
