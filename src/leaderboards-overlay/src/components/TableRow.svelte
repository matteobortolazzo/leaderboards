<script lang="ts">
	export let item: { name: string; score: number };
	export let i: number;
</script>

<tr>
	<td class="cell text-subtext0">{i + 1}</td>
	<td class="cell text-subtext0">{item.name}</td>
	<td
		class={{
			'cell text-right': true,
			'text-yellow': i === 0,
			'text-lavender': i === 1,
			'text-peach': i === 2,
			'text-subtext0': i > 2
		}}>{item.score}p</td
	>
</tr>

<style>
	.cell {
		@apply border-t border-subtext1 px-4 py-1;
	}
</style>
