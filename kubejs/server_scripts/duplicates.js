ServerEvents.recipes(event => {
event.remove({ id: 'createloveandwar:mixing/steel_ingot' })
// Steel car les crafts de TFMG sont bugués donc c'est plus simple comme ça
event.recipes.create.mixing('tfmg:steel_ingot', ['minecraft:coal', 'tfmg:blasting_mixture']).superheated()

})