### Step 1:
What changed compared to the default static positioning?

After relative positioning, its position on the screen becomes relative to its normal position.  The sidebar became spaced away from the top and from the left according to the number of pixels assigned to each side.  Meanwhile, the default static positioning is not spaced away from any side and its elements are displayed as normal. 

### Step 2:
What happens when you scroll the page? Why does the footer behave differently from position relative?

The element remains fixed to the bottom.  In contrast to relative position, fixed positioning stays fixed in the viewport.

### Step 3:
What is the effect of position: absolute on an element? How is it different from fixed?

It is positioned relative to its nearest positioned ancestor.  When I applied this position, it went from being beneath the sidebar to being positioned to its right.  It is different from fixed because it does not stay fixed in the viewport.

### Step 4:
Why does the notice appear on top of the content? What happens if you swap the z‑index values?

It appears ontop of the content because its z-index is greater than the content's.   The z-index determines which layer the element belongs to.  If the z-index values are swapped, the notice becomes overlapped by the content.

Challenge: 
    What changes will you have to do on the code that will position .notice box on the top right corner of the .content box? 

        I will have to change .notice's spacing from the top to be 65px, and its spacing from the left to 430px.

    Try to change the position of .content to relative then to fixed. What do you observe each time?

        When it is changed to relative, it is positioned relatively to its normal position and I observed that it moves downward due to its top value being 66px.  When it is fixed, it goes back to its original position, but remains fixed to the viewport.

    What do you observe on about the effect of z-index on .notice and .content boxes?

        The z-index determines which layer the element belongs to.  A greater z-index means it will overlap elements with lesser z-indexes.
    
    Reflection:

        a. Could you summarize the differences between the CSS position values (static, relative, absolute, fixed)?

        b. How does absolute positioning depend on its parent element?

        c. How do you differentiate sticky from fixed (you can research on sticky)?

        d. If you were designing a webpage for a school event, how might you use positioning to highlight important information? Please give concrete examples.
