const input = document.querySelector('input')
        const add = document.querySelector('button')
        const div = document.querySelector('.tasks')
        const clear = document.querySelector('.clear')
        const text = document.querySelector('.texd')
        const store = localStorage
        let arr = []

        let incrDecre = 0
        // MAIN FUNCTION q
        function main() {
            if (!input.value == '') {
                const a = document.createElement('div')
                const b = document.createElement('div')
                const c = document.createElement('div')
                const i = document.createElement('i')
                a.classList.add('tas')
                b.classList.add('tasTex')
                c.classList.add('del')
                i.classList.add('material-icons')
                i.innerText = 'delete'
                div.appendChild(a)
                a.appendChild(b)
                a.appendChild(c)
                c.appendChild(i)

                arr.push(input.value)
                b.innerText = input.value
                input.value = ""
                incrDecre++

                c.addEventListener('click', function (event) {
                    arr.pop()
                    text.innerText = `you have ${arr.length} task on pending`
                    incrDecre--
                    this.parentElement.remove()
                    for (let i = 0; i < arr.length; i++) {
                        if (arr[i] == store[i]) {
                            store.removeItem(i)
                        }
                    }
                })
                clear.addEventListener('click', function () {
                    for (let i = 0; i < arr.length; i++) {
                        c.parentElement.remove()
                    }
                    setTimeout(function () {
                        arr.length = 0
                    }, 100)
                    incrDecre = 0
                    text.innerText = `you have ${0} task on pending`
                })
                text.innerText = `you have ${arr.length} task on pending`
            }
        }
        add.addEventListener('click', main)
        document.addEventListener('keypress', function (event) {
            const key = event.key
            if (key == 'Enter') {
                main()
            }
        })
        text.innerText = `you have ${0} task on pending`