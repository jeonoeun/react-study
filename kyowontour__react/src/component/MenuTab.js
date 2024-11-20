import First from "./First"
import Second from "./Second"
import Third from "./Third"

const obj = {
    0: <First />,
    1: <Second />,
    2: <Third />
}

const arr = ["First", "Second", "Third"]

export default class MenuTab {
    state = {
        activeTab: 0
    }

    clickHandler = (id) => {
        this.setState({ activeTab: id })
    }

    render() {
        console.log(this.state.activeTab)
        return (
            <div className="wrapper">
                <ul className="tabs">
                    {arr.map((str, idx) => {
                        return (
                            <li key={str} onClick={() => this.clickHandler(idx)}>
                                {str}
                            </li>
                        );
                    })}
                </ul>
                <div className="contents">
                    {obj[this.state.activeTab]}
                </div>
            </div>
        )
    }
}