ServerEvents.recipes(event => {
event.custom({
   "type": "tfmg:polarizing",
  "ingredients": [
    {
      "item": "ae2:certus_quartz_crystal"
    }
  ],
  "processingTime": 250,
  "results": [
    {
      "item": 'ae2:charged_certus_quartz_crystal'
    }
  ],
  "energy": 160
})
event.custom({
    "type": "create_new_age:energising",
  "energy_needed": 160,
  "ingredients": [
    {
      "item": "ae2:certus_quartz_crystal"
    }
  ],
  "results": [
    {
      "item": 'ae2:charged_certus_quartz_crystal'
    }
  ]
})
event.remove({ id: 'ae2:charger/charged_certus_quartz_crystal' })
})