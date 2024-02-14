<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Number to Number Words</title>
    <link rel="stylesheet"; href="./style.css"> 
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap" rel="stylesheet">
</head>
<body>
    <div  class= "container">
        <input id="readNum" type="number" placeholder="Number" value="" />
        <button id="get-number" onclick="convertToNumWords()"> Convert </button>
        <div class="worded-numbers-container">
            <p id=worded-numbers type="text" placeholder="Number Words" value=""></p>
        </div>
    </div>
</body>
<script src="index.js">

</script>
</html>