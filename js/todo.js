const form = document.getElementById('forms')
var itemlist = document.getElementById('items')


form.addEventListener('submit', addItem)
itemlist.addEventListener('click', removeItem)

function addItem(e) {
    e.preventDefault()

    var newItem = document.getElementById('research').value
    var li = document.createElement('li')
    li.className = 'list-group-items'
    li.appendChild(document.createTextNode(newItem))
    var deleted = document.createElement('button')
    deleted.className = 'btn-danger btn-sm float-end delete'
    deleted.appendChild(document.createTextNode('x'))
    li.appendChild(deleted)
    itemlist.appendChild(li)
}

function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('are you sure')) {
            var li = e.target.parentElement;
            itemlist.removeChild(li)
        }
    }
}