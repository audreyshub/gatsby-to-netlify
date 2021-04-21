import * as React from "react"

// styles
const pageStyles = {
    color: "#232129",
    padding: 96,
    fontFamily: "-apple-system, Roboto, sans-serif, serif"
}
const headingStyles = {
    marginTop: 0,
    marginBottom: 64,
    maxWidth: 320
}
const headingAccentStyles = {
    color: "#663399"
}

export default() => (<main style={pageStyles}>
    <h1 style={headingStyles}>
        Congratulations
        <br/>
        <span style={headingAccentStyles}>— you just submitted your form!
        </span>
        <span role="img" aria-label="Party popper emojis">
            🎉🎉🎉
        </span>
    </h1>
</main>)
