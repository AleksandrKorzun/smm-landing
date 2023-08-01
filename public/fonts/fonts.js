import {
	Exo_2,
	Montserrat,
	Inter,
} from 'next/font/google'

export const exo2 = Exo_2({
	subsets: ['latin'],
	variable: '--font-exo-2',
	weight: ['400', '500', '600', '700', '800'],
})

export const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
	weight: ['400'],
})

export const montserrat = Montserrat({
	subsets: ['latin'],
	variable: '--font-montserrat',
	weight: ['500'],
})

export const helvetica = localFont({
	src: [
		{
			path: './local/gilroy.ttf',
			weight: '400',
			style: 'normal',
		},
	],
	variable: '--font-gilroy',
	weight: ['400'],
	display: 'swap',
	subsets: ['latin'],
})