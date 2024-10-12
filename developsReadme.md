React.FC is not recommended because it automatically includes child elements in properties even if they are not needed, resulting in less accurate type checking
------------------------------------------------------------------------------------------------------------------------------------------------------
The <Outlet /> component in React Router is used to render nested routes. 
It acts as a placeholder in your component hierarchy where child routes will be displayed. 
This is particularly useful when you have a layout component that should be shared among several child components,
but you want to render different content based on the specific route.

------------------------------------------------------------------------------------------------------------------------------------------------------
react-router-dom@6.27.0

------------------------------------------------------------------------------------------------------------------------------------------------------

Inline elements are HTML elements that do not start on a new line and only take up as much width as necessary. They are typically used to format parts of a text within block-level elements. Unlike block-level elements, inline elements can sit within block-level elements without breaking the flow of content.

Common Inline Elements
Here are some of the most commonly used inline elements:

<span>: A generic inline container for phrasing content.
<a>: Defines a hyperlink.
<img>: Embeds an image.
<strong>: Indicates strong importance, typically renders as bold text.
<em>: Indicates emphasis, typically renders as italic text.
<br>: Inserts a line break.
<i>: Italic text, often used for styling.
<b>: Bold text, often used for styling.
<code>: Indicates a piece of computer code.
<small>: Renders text in a smaller font size.
<sub>: Subscript text.
<sup>: Superscript text.
<abbr>: Abbreviation or acronym.
<cite>: Cites a title of a work.


Example of Inline Elements
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inline Elements Example</title>
</head>
<body>
    <p>
        This is a <strong>strong</strong> word, this is an <em>emphasized</em> word, and this is a 
        <a href="#">link</a>. Here's an <img src="example.jpg" alt="example image"> in the middle of text.
    </p>
    <p>
        Use the <code>&lt;code&gt;</code> element to display inline code. 
        This is a <span style="color: red;">red</span> word using a <span>span</span> element.
    </p>
</body>
</html>
------------------------------------------------------------------------------------------------------------------------------------------------------