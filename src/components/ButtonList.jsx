import programmingLanguages from "../data/ProgrammingLanguages"
import Button from "./Button/Button"

export default function ButtonList() {
    return (
        <div className="ButtonList">
            {programmingLanguages.map((language) => <Button key={language.id} name={language.name}></Button>)}
        </div>
    )
}