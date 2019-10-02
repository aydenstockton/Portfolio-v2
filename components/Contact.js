import React from 'react'

const Contact = () => {
    document.getElementsByTagName("BODY")[0].setAttribute("theme", "universe");

    return (
        <div>
            <ul>
                <li>John Doe</li>
                <li>555.555.5555</li>
                <li>john@doe.com</li>
            </ul>
        </div>
    )
}

export default Contact
