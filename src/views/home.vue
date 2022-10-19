<script lang="ts" setup>
</script>

<template>

		<section>

			<div class="card">
				<div class="flex mb-6">
					<div class="h-full mr-4">
						<img src="/images/santa.png" alt="santa" width="60" height="58" class="rounded-md"/>
					</div>
					<div class="grow">
						<h4>Projet Secret</h4>
						<p class="text-lg">Pour un Super Noël !</p>
						<div class="grid grid-cols-3 gap-3 mt-5">
							<div>
								<p>TÂCHES</p>
								<h4 class="leading-8">6</h4>
							</div>
							<div>
								<p>MEMBRES</p>
								<img src="/images/membres.png" alt="membres" width="101" height="36"/>
							</div>
							<div>
								<p>VOTES</p>
								<img src="/images/votes.png" alt="votes" width="100" height="26">
							</div>
						</div>
					</div>
				</div>
				<hr class="mb-6 border-gray-light"/>
				<div class="flex justify-between">
					<button>+ Ajouter des membres</button>
					<button class="button-secondary">Quitter le projet</button>
				</div>
			</div>

			<div class="card">
				<div class="flex justify-between mb-5">
					<h4 class="inline-block">Liste des tâches</h4>
				  <button>+ Créer</button>
				</div>
				<div class="border border-gray-light rounded-lg overflow-hidden">
					<table>
						<thead>
							<tr>
								<th><input id="tache-nom" type="checkbox" /> <label for="tache-nom">NOM</label></th>
								<th class="w-10">&nbsp;</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td><input id="tache-1" type="checkbox" /> <label for="tache-1">Préparer la fête de fin d’année</label></td>
								<td><p class="text-lg">...</p></td>
							</tr>
							<tr>
								<td><input id="tache-2" type="checkbox" checked/> <label for="tache-2">Acheter des cadeaux pour l’équipe</label></td>
								<td><p class="text-lg">...</p></td>
							</tr>
							<tr>
								<td><input id="tache-3" type="checkbox" /> <label for="tache-3">Trouver un beau sapin</label></td>
								<td><p class="text-lg">...</p></td>
							</tr>
						</tbody>
					</table>
					</div>
			</div>

		</section>
  
</template>

<style scoped lang="scss">
</style>