export default class Comment {
    constructor(text, img) {
        this.text = text
        this.img = img
        this.date = new Date()
    }

    toString() {
        return JSON.stringify({
            text: this.text,
            img: this.img,
            date: this.date.toJSON()
        })
    }
}