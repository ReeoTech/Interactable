import * as React from "react"
import Interactable from "../src/index"
import { render, fireEvent } from "@testing-library/react"

interface Props {
    getRef: React.RefObject<HTMLDivElement>;
}


const MyComponent = (props: Props) => <div ref={props.getRef}>test</div>
const InteractableComponent = Interactable(MyComponent)

test("Interactable", () => {
    const downMock = jest.fn()
    const { getByText } = render(
        <InteractableComponent
            draggable
            onDown={downMock}
        />
    )

    const div = getByText(/test/)
    fireEvent.mouseDown(div)
    expect(downMock).toBeCalled()
})