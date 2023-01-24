const safelist = []

const widthValues = ['24', '32', '44', '52', '60', '64']
const colors = [
  'green',
  'dark-green',
  'yellow',
  'grey',
  'dark-grey',
  'orange',
  'blue',
  'dark-blue',
  'red',
  'dark-red',
  'purple',
  'pink',
]

widthValues.forEach((widthValue) => {
  safelist.push(`w-${widthValue}`)
})

colors.forEach((color) => {
  safelist.push(`bg-${color}`)
})

module.exports = {
  safelist() {
    return safelist
  },
}
