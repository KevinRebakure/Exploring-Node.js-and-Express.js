function getItems(data) {
    const obj = JSON.parse(data)
    const items = obj.items.map((item) => item.title)
    return items.join('\n')
}

module.exports = getItems
