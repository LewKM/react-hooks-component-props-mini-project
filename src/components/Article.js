export default function Article(props) {
    const { title, date = "January 1, 1970", preview, minutes } = props

    let minutesIndicator
    if (minutes < 30) {
        let numCoffees = Math.ceil(minutes / 5)
        let coffeeArray = []
        for (let i = 0; i < numCoffees; i++) {
            coffeeArray.push("☕️")
        }
        minutesIndicator = coffeeArray.join("") + ` ${minutes} `
    } else if (minutes >= 30) {
        let numBentos = Math.ceil(minutes / 10)
        let bentoArray = []
        for (let i = 0; i < numBentos; i++) {
            bentoArray.push("🍱")
        }
        minutesIndicator = bentoArray.join("")
    }

    return ( <
        article >
        <
        h3 > { title } < /h3> <
        small > { date } || { minutesIndicator }
        min read < /small> <
        p > { preview } < /p> <
        /article>
    )
}