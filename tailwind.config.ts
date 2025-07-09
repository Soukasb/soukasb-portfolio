
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				display: ['Playfair Display', 'serif'],
			},
			colors: {
				// Core Colors (Golden-Brown Base)
				border: 'hsl(38, 20%, 85%)',               // Soft wheat border
				input: 'hsl(38, 20%, 95%)',                // Creamy input bg
				ring: 'hsl(38, 60%, 60%)',                 // Amber focus ring
				background: 'hsl(40, 30%, 98%)',           // Warm ivory bg
				foreground: 'hsl(30, 20%, 20%)',           // Deep espresso text
				
				// Primary = YOUR STAR COLOR! ✨
				primary: {
				  DEFAULT: 'hsl(38, 80%, 60%)',            // Rich amber (main buttons/links)
				  foreground: 'hsl(30, 20%, 10%)',         // Dark text for contrast
				},
				
				// Secondary = Complementary Earth Tones  
				secondary: {
				  DEFAULT: 'hsl(30, 30%, 80%)',            // Muted sand
				  foreground: 'hsl(30, 20%, 30%)',         // Soft brown text
				},
				
				// Destructive = Warm but still "warning"  
				destructive: {
				  DEFAULT: 'hsl(10, 70%, 50%)',            // Spicy terracotta
				  foreground: 'hsl(0, 0%, 100%)',          // White text
				},
				
				// Muted = Subtle Backdrops  
				muted: {
				  DEFAULT: 'hsl(40, 20%, 94%)',            // Pale latte
				  foreground: 'hsl(30, 10%, 40%)',         // Dusty brown text
				},
				
				// Accent = Golden Highlights  
				accent: {
				  DEFAULT: 'hsl(45, 90%, 70%)',            // Bright gold
				  foreground: 'hsl(30, 20%, 15%)',         // Dark text
				},
				
				// Cards/Popovers = Elegant Depth  
				popover: {
				  DEFAULT: 'hsl(40, 30%, 95%)',            // Warm white
				  foreground: 'hsl(30, 20%, 20%)',         // Espresso text
				},
				card: {
				  DEFAULT: 'hsl(40, 30%, 93%)',            // Soft parchment
				  foreground: 'hsl(30, 20%, 20%)',         // Readable dark
				},
				
				// Sidebar = Cozy & Luxe  
				sidebar: {
				  DEFAULT: 'hsl(35, 25%, 20%)',            // Dark caramel bg
				  foreground: 'hsl(38, 20%, 90%)',         // Cream text
				  primary: 'hsl(38, 80%, 60%)',            // Amber accents
				  'primary-foreground': 'hsl(30, 20%, 10%)',
				  accent: 'hsl(45, 90%, 70%)',             // Gold highlights
				  'accent-foreground': 'hsl(35, 25%, 15%)',
				  border: 'hsl(35, 15%, 30%)',             // Deep brown border
				  ring: 'hsl(38, 60%, 60%)',               // Amber focus
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-in': {
					'0%': {
						transform: 'translateX(-100%)',
						opacity: '0'
					},
					'100%': {
						transform: 'translateX(0)',
						opacity: '1'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				'pulse-soft': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.7' },
				},
				'spin-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' },
				},
				'bounce-gentle': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-5px)' },
				},
				'scale-pulse': {
					'0%, 100%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(1.05)' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out forwards',
				'slide-in': 'slide-in 0.5s ease-out forwards',
				'float': 'float 5s ease-in-out infinite',
				'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
				'spin-slow': 'spin-slow 20s linear infinite',
				'bounce-gentle': 'bounce-gentle 2s ease-in-out infinite',
				'scale-pulse': 'scale-pulse 3s ease-in-out infinite',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
