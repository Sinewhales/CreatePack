StartupEvents.registry('item', event => {
  // The texture for this item has to be placed in kubejs/assets/kubejs/textures/item/test_item.png
  // If you want a custom item model, you can create one in Blockbench and put it in kubejs/assets/kubejs/models/item/test_item.json
  event.create('iron_comb').displayName('Iron Comb')
  event.create('advanced_mechanism').displayName('Advanced Mechanism')
  event.create('unfinished_receptacle', 'create:sequenced_assembly').displayName('Incomplete Receptacle')
  event.create('unfinished_genetics', 'create:sequenced_assembly').displayName('Incomplete Genetics Processor')
  event.create('unfinished_power', 'create:sequenced_assembly').displayName('Incomplete Power Module')
  event.create('unfinished_environmental', 'create:sequenced_assembly').displayName('Incomplete Environmental Processor')
})