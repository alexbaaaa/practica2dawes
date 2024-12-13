export class Check {
    constructor(parent,client) {
        this.parent = parent;
        this.client = client;
        this.states = [];
    }
    // Metodo para cambiar el estado de cada toggle
    changeValue(name, value) {
        const data = this.states.find((item) => item.name == name);
        if(value) {
            data.state = true;
            
        }
        console.log(data);
    }
    // metodo para añadir todos los elemntos dinamicos de cada toggle y ademas 
    // guardar datos sobre cada uno
    addCheck(name) {
        this.states.push({
            name : name,
            state : false,
            group : this.parent
        })
        const check = document.createElement("label");
        check.classList.add("form-switch");
        this.parent.appendChild(check);
        const input = document.createElement("input");
        input.setAttribute('type', 'checkbox');
        check.appendChild(input);
        check.appendChild(document.createElement("i"));
        const span = document.createElement('span');
        const text = document.createTextNode('OFF');
        span.appendChild(text);
        check.appendChild(span);
        input.addEventListener('change', (event)=> {
            this.changeValue(name, event.target.checked);
        })
    }
}

