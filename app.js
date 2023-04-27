window.addEventListener('load',()=> {
    const form = document.querySelector("#nav-todo-form");
    const input = document.querySelector("#content");
    const task_todo = document.querySelector("#todo_list");
    
    form.addEventListener('submit',(e) => {
        e.preventDefault();
        const task = input.value;
        if(!task) {
            alert("Please fill out the task");
            return;
        }
        

        
        const task_item = document.createElement("div");
        task_item.classList.add("todo_item");
        task_todo.prepend(task_item);

        const checkbox_business = document.createElement("div");
        
        task_item.prepend(checkbox_business);
        const check_box = document.createElement("input");
        check_box.type = "checkbox";
        check_box.classList.add("check");
        
        checkbox_business.append(check_box);

        
        const todoContent = document.createElement("div");
        todoContent.classList.add("todo_content");
        task_item.append(todoContent);
        const task_name = document.createElement("input");
        task_name.type = "text";
        task_name.setAttribute("readonly","readonly");
        task_name.classList.add("task_input");
        task_name.value = input.value;
        todoContent.appendChild(task_name);
        
        const action_container = document.createElement("div");
        action_container.classList.add("actions");
        task_item.append(action_container);
        const edit_button = document.createElement("button");
        edit_button.classList.add("edit");
        edit_button.innerHTML = "Edit";
        action_container.append(edit_button);
        const delete_button = document.createElement("button");
        delete_button.classList.add("delete");
        delete_button.innerHTML = "Delete";
        action_container.append(delete_button);
        
        
        
        var ele = document.getElementsByName('category');
            
        for(i = 0; i < ele.length; i++) {
            if(ele[i].checked) {
                check_box.classList.add(ele[i].value);
                var d=checkbox_business.classList.add("checkbox-"+ele[i].value);
                
            }
        }

        let checked = document.querySelector(".check");
        checked.addEventListener('change', function() {
        if (this.checked) {
            task_name.style.textDecoration = "line-through";
            task_name.style.color = "gray";
        } else {
            task_name.style.textDecoration = "none";
            task_name.style.color = "#313154";
        }
        });

        edit_button.addEventListener('click', () => {
            if(edit_button.innerText.toLowerCase() == "edit") {
                task_name.removeAttribute("readonly");
                task_name.focus();
                edit_button.innerText = "Save";
            } else {
                task_name.setAttribute("readonly","readonly");
                edit_button.innerText = "Edit";
            }
        })

        delete_button.addEventListener('click',() => {
            task_item.remove();
        })

        
        
        
        
    })
    
})
