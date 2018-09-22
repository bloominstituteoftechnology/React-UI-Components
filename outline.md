//social card outline

card
    header
        logo
        name
        handle 
        date
    status update
    article
        img
        text preview
        link
    social
        comment
        repost
        like
        message

------------------------------------------------------------------------


//calculator outline

//Calculator Component
calc container
    //Output Component
    output header (black box that displays output)
    //NumberPad Component
    div.whole-number-pad
        //WhiteButtons component
        div.nums-and-clear
            
            //two components - BigButton and Nums
            div.big-button (BigButton)
            div.nums (Nums)
            div.nums
            div.nums
            div.big-button      
      
        //RedButtons component
        div.action-buttons
            button
            button
            button
            button
            button
------------------------------------------------------------------------
<App />
<Calculator />
    <Output />
    <NumberPad />
        <WhiteButtons />
            <BigButton />
            <Nums />
            <Nums />
            <Nums />
            <BigButton />
        <RedButtons />
