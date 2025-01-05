<script lang="ts">
	import Item from '../components/Item.svelte';

	const items = [
		{ name: 'johndoe123', score: 1000 },
		{ name: 'janesmith456', score: 950 },
		{ name: 'alex1990', score: 900 },
		{ name: 'emily.watson', score: 850 },
		{ name: 'mike_the_guy', score: 800 },
		{ name: 'sara_89', score: 750 },
		{ name: 'tommy.rivers', score: 700 },
		{ name: 'kate_wonder', score: 650 },
		{ name: 'lisa_cool', score: 600 },
		{ name: 'daniel_007', score: 550 },
		{ name: 'robbie.king', score: 500 },
		{ name: 'melissa_bright', score: 450 },
		{ name: 'charlie1234', score: 400 },
		{ name: 'sophia_grace', score: 350 },
		{ name: 'jack_hammer', score: 300 },
		{ name: 'amy.breeze', score: 250 },
		{ name: 'tony_star', score: 200 },
		{ name: 'bella_love', score: 150 },
		{ name: 'ryan.flynn', score: 100 },
		{ name: 'lucy_sky', score: 90 },
		{ name: 'david2025', score: 80 },
		{ name: 'natalie.green', score: 70 },
		{ name: 'sam_slick', score: 60 },
		{ name: 'oliver_rock', score: 50 },
		{ name: 'emma.gem', score: 40 },
		{ name: 'chris.wave', score: 30 },
		{ name: 'hannah.star', score: 20 },
		{ name: 'ethan_coder', score: 10 },
		{ name: 'zoe.smile', score: 5 }
	];
</script>

<div class="flex h-full items-end">
	<div class="border-t border-pink-700 bg-base">
		<div class="flex flex-wrap gap-x-8 px-8 py-4">
			{#each items as item, i}
				<Item {item} {i} />
			{/each}
		</div>
	</div>
</div>
