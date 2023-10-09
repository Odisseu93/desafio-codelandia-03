<script setup lang="ts">
import { cards } from '../mock/cards'
import { toast } from 'vue3-toastify'
import { objectToCssClasses as convert } from '../utils/objectToCssClasses'
import 'vue3-toastify/dist/index.css'

const { container, list, item, square, title, paragraph } = {
	container: {
		display: 'flex',
		alignments: 'flex-col justify-center items-center',
		spacing: 'pt-[5rem]',
	},

	list: {
		display: 'flex',
		alignments: 'flex-col justify-center items-center',
		spacing: 'gap-10',
		breakpoints:
			'max-w-[1900px] md:gap-16 md:flex-row md:flex-wrap lg:gap-28 min-[1836px]:px-[10rem]',
	},

	item: {
		sizes: 'w-[375px]',
		breakpoints: 'md:hover:opacity-80 md:cursor-pointer',
	},

	square: {
		sizes: 'w-full',
		spacing: 'py-28',
	},

	title: {
		display: 'block',
		tipograph: 'font-[700] text-[2rem] font-Merriweather',
		spacing: 'pt-3 ps-8',
	},

	paragraph: {
		display: 'block',
		tipograph: 'font-Lato text-dark-20',
		spacing: 'w-5/6 pt-4 ps-8',
	},
}

const notify = (msg: string) => {
	toast(`${msg}!`, {
		autoClose: 1000,
	}) // ToastOptions
	return { notify }
}
</script>

<template>
	<main :class="convert(container)">
		<ul :class="convert(list)">
			<li
				v-for="(card, index) in cards"
				:class="convert(item)"
				:key="card.id"
				@click="notify(`Voce clicou no card ${index + 1}!`)"
			>
				<div
					:class="convert(square)"
					:style="`background-color: ${card.color};`"
				></div>
				<h3 :class="convert(title)">
					{{ card.title }}
				</h3>
				<p :class="convert(paragraph)">
					{{ card.text }}
				</p>
			</li>
		</ul>
	</main>
</template>
