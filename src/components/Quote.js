import React from "react"

import { QuoteContainer, QuoteText,QuoteTextMore } from "./styles"
import TextLoop from "react-text-loop"

const Quote = () =>{
    return (
        <>
        <QuoteContainer>
      {/* <QuoteText style={{ marginRight: "1rem" }}>ismael</QuoteText> */}
      <TextLoop springConfig={{ stiffness: 200, damping: 5 }} >
        <QuoteText>Zero To Hero</QuoteText>
         <QuoteText>Difficult roads often lead <br/>to beautiful destination.</QuoteText>
        <QuoteTextMore>Be thankful for what you are now, <br/>and keep fighting <br/>for what you want to be tomorrow.</QuoteTextMore>
        {/*<QuoteText>3.</QuoteText>
        <QuoteText>5.</QuoteText>
        <QuoteText>6.</QuoteText>
        <QuoteText>7.</QuoteText>
        <QuoteText>8.</QuoteText> */}
      </TextLoop><br/>
      <QuoteText style={{ marginLeft: "1rem" }}>— me</QuoteText>
    </QuoteContainer>
        </>
    )
}
export default Quote