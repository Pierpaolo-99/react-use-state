import programmingLanguages from "../data/ProgrammingLanguages"
import { useState } from "react"
import Button from "./Button/Button"

export default function ButtonList() {

    const [ActiveButton, setActiveButton] = useState(1)

    return (
        <div className="ButtonList">
            {programmingLanguages.map((language, index) => (
                <Button key={language.id} name={language.name}
                    ActiveButton={ActiveButton === language.id}
                    handleOpen={() => setActiveButton(ActiveButton === language.id ? 0 : language.id)}
                >
                    {language.description}
                </Button>
            ))}
        </div>
    )
}