class InputObservable {
    constructor() {
        this.observers = [];
    }
    subscribe(observer) {
        this.observers.push(observer);
    }
    unsubscribe(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }
    notify(data){
        this.observers.forEach(observer => observer.update(data))
    }
}

class itemObserver{
    constructor(observableData){
        this.observableData = observableData
    }
    update(data){
        this.observableData = data
    }
}
class observableData {
    constructor(data){
        this.data = data
    }
}
const observado = new InputObservable()
const observador01 = new itemObserver(new observableData("data 01"))
const observador02 = new itemObserver(new observableData("data 02"))

observado.subscribe(observador01)
observado.subscribe(observador02)

for (let i = 0; i < 10; i++) {
    observado.notify(`data ${i}`)
    console.log(observador01.observableData)
    console.log(observador02.observableData)
}
