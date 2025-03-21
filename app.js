
            let globalId = 1;
            function markasDone(todoId) {
            const parent = document.getElementById(todoId);
            parent.children[2].innerHTML = "Done!"
        }

        function createChild(title,description,id) {
            const child = document.createElement("div");
            const firstGrandChild = document.createElement("div");
            firstGrandChild.innerHTML = title;
            const secondGrandChild = document.createElement("div");
            secondGrandChild.innerHTML = description;
            const thirdGrandChild = document.createElement("button");
            thirdGrandChild.innerHTML = "Mark as done"
            thirdGrandChild.setAttribute("onclick", `markasDone(${id})`);
            child.appendChild(firstGrandChild);
            child.appendChild(secondGrandChild);
            child.appendChild(thirdGrandChild);
            child.setAttribute("id", id);
            return child;
        }

        function addTodo(){
            const title = document.getElementById("title").value;
            const description = document.getElementById("description").value;
            const parent = document.getElementById("todos");

            parent.appendChild(createChild(title,description,globalId++));
        }
