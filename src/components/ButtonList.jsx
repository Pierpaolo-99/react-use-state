import programmingLanguages from "../data/ProgrammingLanguages"
import { useState } from "react"
import Button from "./Button/Button"
import Card from "./Card/Card"

export default function ButtonList() {

    const [ActiveButton, setActiveButton] = useState(1)

    return (
        <>
            <div className="ButtonList">
                {programmingLanguages.map(language => (
                    <Button key={language.id} name={language.name}
                        ActiveButton={ActiveButton === language.id}
                        handleOpen={() => setActiveButton(ActiveButton === language.id ? 0 : language.id)}
                    >
                    </Button>
                ))}
            </div>
            {programmingLanguages.map(language => (
                ActiveButton === language.id && <Card key={language.id} ActiveButton={ActiveButton} title={language.title} description={language.description} />
            ))}
        </>
    )
}