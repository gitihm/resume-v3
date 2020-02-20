import React from "react"

import { QuoteContainer, QuoteText } from "./styles"
import TextLoop from "react-text-loop"

const Quote = () =>{
    return (
        <>
        <QuoteContainer>
      {/* <QuoteText style={{ marginRight: "1rem" }}>ismael</QuoteText> */}
      <TextLoop springConfig={{ stiffness: 200, damping: 5 }} >
        <QuoteText>ZERO</QuoteText>
        {/* <QuoteText>2.</QuoteText>
        <QuoteText>3.</QuoteText>
        <QuoteText>4.</QuoteText>
        <QuoteText>5.</QuoteText>
        <QuoteText>6.</QuoteText>
        <QuoteText>7.</QuoteText>
        <QuoteText>8.</QuoteText> */}
        <QuoteText>TO</QuoteText>
        <QuoteText>HERO</QuoteText>
      </TextLoop><br/>
      {/* <QuoteText style={{ marginLeft: "1rem" }}><br/>— me</QuoteText> */}
    </QuoteContainer>
        </>
    )
}
export default Quote