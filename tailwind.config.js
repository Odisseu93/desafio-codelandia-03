/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
			brand: '#6C63FF',
			'brand-light': '#D7D4FF',
	
			/* dark scale */
			dark: {
				10: '#2A2A2A', /* 100% */
				20: '#555555', /* 70% */
				30: '#F9F9F9', /* 20% */
				40: '#FFFFFF', /* 10% */
			},
	
			/* color system */
			system: {
				message: '#2962FF',
				success: '#0BB07B',
				warning: '#FFCE52',
				error: '#F03D3D',
				info: '#E0E0E0',
			},
    },

		fontFamily: {
			'Lato': "'Lato', sans-serif",
			'Merriweather': "'Merriweather', serif"
		},

    extend: {},

  },
  plugins: [],
}