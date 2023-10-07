<script lang="ts">
import { objectToCssClasses } from '../utils/objectToCssClasses'

// utility CSS classes
export default {
	methods: {
		objectToCssClasses,
	},
	computed: {
		heroClasses() {
			return {
				container: {
					name: 'hero',
					background: 'bg-brand-light',
					spacing: 'px-5 py-10',
					breakpoint:
						'min-[800px]:flex  min-[800px]:items-center min-[1400px]:px-[15vw]',
				},

				body: {
					name: 'hero__box',
					background: 'bg-brand-light',
					display: ' flex',
					aligment: 'flex-col mx-auto ',
					sizes: 'w-[22rem]',
					spacing: 'gap-4 pb-28',
					breakpoint: 'min-[800px]:p-0',
				},

				title: {
					name: 'hero__box___title',
					sizes: 'w-[20rem]',
					typography: 'font-Merriweather text-[2rem] text-left',
				},

				paragraph: {
					name: 'hero__box__paragraph',
					sizes: 'w-[90%]',
					typography: 'text-dark-20',
				},

				button: {
					name: 'hero__box__button',
					background: 'bg-brand',
					sizes: 'w-fit ',
					spacing: 'px-[3.2rem] py-[.67rem] ',
					border: 'border-none rounded-[5px]',
					typography: 'text-dark-40 text-[20px] font-[700]',
					states: 'hover:brightness-95 active:brightness-90',
				},

				image: {
					name: 'hero__image',
					background:
						"bg-no-repeat bg-contain bg-[url('/assets/img/illustration.svg')]",
					sizes: 'w-[20rem] h-[300px]',
					spacing: 'mx-auto',
					breakinpoint: ' min-[800px]:w-[22rem]',
				},
			}
		},
	},
}
</script>

<template>
	<section :class="objectToCssClasses(heroClasses.container)">
		<div :class="objectToCssClasses(heroClasses.body)">
			<h1 :class="objectToCssClasses(heroClasses.title)">
				Lorem ipsum dolor sit amet.
			</h1>
			<p :class="objectToCssClasses(heroClasses.paragraph)">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu
				massa sit amet augue consectetur ullamcorper non ac massa.
			</p>
			<button :class="objectToCssClasses(heroClasses.button)">Botão</button>
		</div>
		<div :class="objectToCssClasses(heroClasses.image)"></div>
	</section>
</template>
