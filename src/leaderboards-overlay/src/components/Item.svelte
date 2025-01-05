<script lang="ts">
	export let item: { name: string; score: number };
	export let i: number;
</script>

<div>
	<span>{i + 1}.</span>
	<span class="text-subtext1">{item.name}</span>
	<span
		class={{
			'font-semibold': true,
			'text-yellow': i === 0,
			'text-lavender': i === 1,
			'text-peach': i === 2
		}}
	>
		{item.score}p
	</span>
</div>
