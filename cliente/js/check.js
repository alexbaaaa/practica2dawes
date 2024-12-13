export class Check {
    static #instance = null;
    constructor(parent, client) {
        if (Check.#instance) {
            throw new Error("Use Check.getInstance() to access the singleton instance.");
        }
        this.parent = parent;
        this.client = client;
        this.states = [];
    }

    // Método estático para obtener la instancia única
    static getInstance(parent = null, client = null) {
        if (!Check.#instance) {
            Check.#instance = new Check(parent, client);
        }
        return Check.#instance;
    }

    changeValue(name, value) {
        const data = this.states.find((item) => item.name == name);
        data.group = this.parent;
        if(value) {
            data.state = true;
        }
        console.log(this.states);
    }

    addCheck(name) {
        this.states.push({
            name : name,
            state : false,
            group : null,
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

