/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['var(--font-body)'],
				display: ['var(--font-display)'],
			},
			colors: {
				// Tu Caja App brand palette
				primary: {
					DEFAULT: '#31B099',
					50: '#E8F8F4',
					100: '#CFF1E8',
					200: '#A0E3D2',
					300: '#70D5BC',
					400: '#50C4AA',
					500: '#31B099',
					600: '#27907D',
					700: '#1F7263',
					800: '#175548',
					900: '#0F372F',
				},
				secondary: {
					DEFAULT: '#22396B',
					50: '#E7ECF6',
					100: '#CFD9ED',
					200: '#9EB2DA',
					300: '#6E8CC8',
					400: '#4865A2',
					500: '#22396B',
					600: '#1C2F58',
					700: '#152544',
					800: '#0F1B31',
					900: '#08111D',
				},
				accent: {
					DEFAULT: '#29ABE2',
					50: '#E6F5FC',
					100: '#CCEBF8',
					200: '#99D7F1',
					300: '#66C3EA',
					400: '#33AFE3',
					500: '#29ABE2',
					600: '#1F89B5',
					700: '#176788',
					800: '#0F465B',
					900: '#08242E',
				},
				dark: {
					DEFAULT: '#1C2634',
					50: '#E5E7EA',
					100: '#C9CCD2',
					200: '#9298A4',
					300: '#5C6577',
					400: '#393F4D',
					500: '#1C2634',
					600: '#161E29',
					700: '#10161E',
					800: '#0A0E13',
					900: '#050709',
				},
			},
			backgroundImage: {
				'brand-gradient':
					'linear-gradient(135deg, #31B099 0%, #29ABE2 50%, #22396B 100%)',
				'brand-gradient-soft':
					'linear-gradient(135deg, #E8F8F4 0%, #E6F5FC 60%, #FFFFFF 100%)',
				'brand-gradient-soft-dark':
					'linear-gradient(135deg, #0F372F 0%, #08242E 60%, #0A0E13 100%)',
			},
			boxShadow: {
				'brand-glow': '0 0 40px rgba(49, 176, 153, 0.35)',
				'accent-glow': '0 0 40px rgba(41, 171, 226, 0.35)',
			},
			keyframes: {
			'float-fast': {
				'0%, 100%': { transform: 'translateY(0px)' },
				'50%': { transform: 'translateY(-12px)' },
			},
			'float-slow': {
				'0%, 100%': { transform: 'translateY(0px)' },
				'50%': { transform: 'translateY(-15px)' },
			},
				'float-slower': {
					'0%, 100%': { transform: 'translate(0px, 0px)' },
					'50%': { transform: 'translate(10px, -20px)' },
				},
				'gradient-x': {
					'0%, 100%': { 'background-position': '0% 50%' },
					'50%': { 'background-position': '100% 50%' },
				},
				'fade-in-up': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				shimmer: {
					'0%': { 'background-position': '-200% 0' },
					'100%': { 'background-position': '200% 0' },
				},
				'pulse-ring': {
					'0%': {
						transform: 'scale(0.95)',
						'box-shadow': '0 0 0 0 rgba(49, 176, 153, 0.55)',
					},
					'70%': {
						transform: 'scale(1)',
						'box-shadow': '0 0 0 18px rgba(49, 176, 153, 0)',
					},
					'100%': {
						transform: 'scale(0.95)',
						'box-shadow': '0 0 0 0 rgba(49, 176, 153, 0)',
					},
				},
				'spin-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' },
				},
				wiggle: {
					'0%, 100%': { transform: 'rotate(-3deg)' },
					'50%': { transform: 'rotate(3deg)' },
				},
			},
			animation: {
				'float-fast': 'float-fast 2.8s ease-in-out infinite',
			'float-slow': 'float-slow 6s ease-in-out infinite',
				'float-slower': 'float-slower 9s ease-in-out infinite',
				'gradient-x': 'gradient-x 8s ease infinite',
				'fade-in-up': 'fade-in-up 0.8s ease-out both',
				shimmer: 'shimmer 2.5s linear infinite',
				'pulse-ring': 'pulse-ring 2.4s cubic-bezier(0.66, 0, 0, 1) infinite',
				'spin-slow': 'spin-slow 18s linear infinite',
				wiggle: 'wiggle 1.6s ease-in-out infinite',
			},
		},
	},
	plugins: [],
}
