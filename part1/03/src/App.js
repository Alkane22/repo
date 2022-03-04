import { useState } from 'react'

const Statistics = ({ rates }) => {
    if (rates.good === 0 & rates.neutral === 0 & rates.bad === 0) {
        return (
            <>
                No feedback given
            </>
        )
    }

    let all = rates.good + rates.neutral + rates.bad

    return (
        <table>
            <tbody>
                <tr>
                    <td>good</td>
                    <td>{rates.good}</td>
                </tr>
                <tr>
                    <td>neutral</td>
                    <td>{rates.neutral}</td>
                </tr>
                <tr>
                    <td>bad</td>
                    <td>{rates.bad}</td>
                </tr>
                <tr>
                    <td>all</td>
                    <td>{all}</td>
                </tr>
                <tr>
                    <td>average</td>
                    <td>{1 - (rates.good - rates.bad)/all}</td>
                </tr>
                <tr>
                    <td>positive</td>
                    <td>{(rates.good / all)*100} %</td>
                </tr>
            </tbody>
        </table>
    )
}

const App = () => {
    const [rates, setAll] = useState({
        good: 0,
        neutral: 0,
        bad: 0
    })


    const setAllRates = (props, which) => () => {
        switch (which) {
            case 'good':
                setAll({ ...props, good: props.good + 1 })
                break;
            case 'neutral':
                setAll({ ...props, neutral: props.neutral + 1 })
                break;
            case 'bad':
                setAll({ ...props, bad: props.bad + 1 })
                break;
            default:
        }
    }


    return (
        <div>
            <div>
                <h1>give feedback</h1>
                <button onClick={setAllRates(rates, 'good')}>good</button>
                <button onClick={setAllRates(rates, 'neutral')}>neutral</button>
                <button onClick={setAllRates(rates, 'bad')}>bad</button>

                <h2>statistics</h2>
                <Statistics rates={rates} />
            </div>
        </div>
    )
}

export default App
