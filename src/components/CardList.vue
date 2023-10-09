<script setup lang="ts">
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

const uuid = () => crypto.randomUUID()

const cards = [
	{
		id: uuid(),
		color: '#FF6363',
		title: 'Título do card',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl.',
	},
	{
		id: uuid(),
		color: '#63ECFF',
		title: 'Título do card',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl.',
	},
	{
		id: uuid(),
		color: '#F363FF',
		title: 'Título do card',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl.',
	},
	{
		id: uuid(),
		color: '#63FF73',
		title: 'Título do card',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl.',
	},
	{
		id: uuid(),
		color: '#FFDD63',
		title: 'Título do card',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl.',
	},
	{
		id: uuid(),
		color: '#6663FF',
		title: 'Título do card',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl.',
	},
]

const notify = (msg: string) => {
	toast(`${msg}!`, {
		autoClose: 1000,
	}) // ToastOptions
	return { notify }
}
</script>

<template>
	<div class="flex flex-col justify-center pt-[5rem] items-center">
		<ul
			class="flex flex-col items-center justify-center gap-10 card-list max-w-[1900px] md:gap-16 md:flex-row md:flex-wrap lg:gap-28 min-[1836px]:px-[10rem]"
		>
			<li
				v-for="(card, index) in cards"
				class="w-[375px] md:hover:opacity-80 md:cursor-pointer"
				:key="card.id"
				@click="notify(`Voce clicou no card ${index + 1}!`)"
			>
				<div
					class="w-full py-28 square"
					:style="`background-color: ${card.color};`"
				></div>
				<h3 class="font-Merriweather font-[700] text-[2rem] pt-3 block ps-8">
					{{ card.title }}
				</h3>
				<p class="block w-5/6 pt-4 font-Lato text-dark-20 ps-8">
					{{ card.text }}
				</p>
			</li>
		</ul>
	</div>
</template>
