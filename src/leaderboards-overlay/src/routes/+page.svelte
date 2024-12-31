<script lang="ts">
	import TableRow from '../components/TableRow.svelte';

	const items = [
		{ name: 'John', score: 1000 },
		{ name: 'Jane', score: 900 },
		{ name: 'Doe', score: 800 },
		{ name: 'Smith', score: 700 },
		{ name: 'Doe', score: 600 },
		{ name: 'Smith', score: 500 },
		{ name: 'Doe', score: 400 },
		{ name: 'Smith', score: 300 },
		{ name: 'Doe', score: 200 },
		{ name: 'Smith', score: 100 }
	];
</script>

<div class="flex justify-end overflow-hidden rounded-xl px-4 py-8">
	<div class="border border-subtext1 bg-base">
		<header class="p-2">
			<h1 class="text-center text-2xl font-bold uppercase text-mauve">Leaderboard</h1>
			<h2 class="text-center text-lg font-bold uppercase text-lavender">ITS 2023/24</h2>
		</header>
		<table class="w-full table-auto">
			<tbody class="bg-base">
				{#each items as item, i}
					<TableRow {item} {i} />
				{/each}
			</tbody>
		</table>
	</div>
</div>
