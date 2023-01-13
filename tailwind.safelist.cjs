const widthSafeList = []

const widthValues = ['24', '32', '44', '52', '60', '64']

widthValues.forEach((widthValue) => {
  widthSafeList.push(`w-${widthValue}`)
})

module.exports = {
  widthSafeList() {
    return widthSafeList
  },
}
