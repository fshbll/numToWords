<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Number to Number Words</title>
    <link rel="stylesheet"; href="./css/style.css"> 
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap" rel="stylesheet">
    <script src="./js/converter.js"></script>
</head>
<body>
    <h1>Convert</h1>
    <div  class= "container">
        <input id="readNum" type="number" placeholder="Number" value="" />
        <button id="get-number" onclick="convertToNumWords()"> Convert </button>
        <div class="worded-numbers-container">
            <p id=worded-numbers></p>
        </div>
        <button id="clearNum" onclick="clearThis()">Clear</button>
    </div>
</body>
<script src="./js/index.js">
    const clearThis = () => {
    document.getElementById('readNum') = ''
}
</script>
</html>