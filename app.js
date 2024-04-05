const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

placeholders.forEach((placeholder) => {
  placeholder.addEventListener('dragover', dragover)
  placeholder.addEventListener('dragenter', dragenter)
  placeholder.addEventListener('dragleave', dragleave)
  placeholder.addEventListener('drop', dragdrop)
})

function dragover(e) {
  e.preventDefault()
}
function dragenter(e) {
  e.target.classList.add('hovered')
}
function dragleave(e) {
  e.target.classList.remove('hovered')
}
function dragdrop(e) {
  e.target.classList.remove('hovered')
  e.target.append(item)
}

function dragstart(e) {
  setTimeout(() => item.classList.add('hidden'), 0)
  item.classList.add('hold')
}
function dragend(e) {
  item.className = 'item'
}
